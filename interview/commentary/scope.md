
## Scope
>컴퓨터 프로그래밍에서 변수 영역은 변수가 유효성을 갖는 영역을 가리킨다. 프로그램은 영역을 벗어난 변수를 가리킬 수 없다.
___


전역(global)변수를 만드는 일은 최대한 지양해야합니다. 전역변수란 자바스크립트에서 제일 바깥 범위(함수 안에 포함되지 않은)에 변수를 만드는 건데요. window 객체에 변수를 만드는 겁니다.
```js
var x = 'global';
function ex() {
  var x = 'local';
  x = 'change';
}
ex(); // x를 바꿔본다.
alert(x); // 여전히 'global'
```
>같은 x여도 ex 함수 바깥의 x는 전역변수고, ex 함수 안의 x는 ex 함수의 지역변수입니다.

```js
var x = 'global';
function ex() {
  x = 'change';
}
ex();
alert(x); // 'change'
```
>자바스크립트는 변수의 범위를 호출한 함수의 지역 스코프부터 전역 변수들이 있는 전역 스코프까지 점차 넓혀가며 찾기 때문입니다.

## `Scope chain`

전역변수와 지역변수의 관계에서 스코프 체인(scope chain)이란 개념이 나옵니다. 내부 함수에서는 외부 함수의 변수에 접근 가능하지만 외부 함수에서는 내부 함수의 변수에 접근할 수 없습니다. 

```js
var name = 'zero';
function outer() {
  console.log('외부', name);
  function inner() {
    var enemy = 'nero';
    console.log('내부', name);
  }
  inner();
}
outer();
console.log(enemy); // undefined
```

inner 함수는 name 변수를 찾기 위해 먼저 자기 자신의 스코프에서 찾고, 없으면 한 단계 올라가 outer 스코프에서 찾고, 없으면 다시 올라가 결국 전역 스코프에서 찾습니다. 다행히 전역 스코프에서 name 변수를 찾아서 'zero'라는 값을 얻었습니다. 만약 전역 스코프에도 없다면 변수를 찾지 못하였다는 에러가 발생합니다. 이렇게 꼬리를 물고 계속 범위를 넓히면서 찾는 관계를 `스코프 체인`이라고 부릅니다.


```js
var name = 'beom';
function log() {
  console.log(name);
}

function wrapper() {
  var name = 'test';
  log();
}
wrapper();
```
beom입니다. 스코프는 함수를 선언할 때 생긴다고 했죠? log 안의 name은 wrapper 안의 지역변수 name이 아니라, 전역변수 name을 가리키고 있는 겁니다. 이런 것을 lexical scoping이라고 합니다.

함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳(상위 범위에서)에 있는 변수를 계속 참조하게 됩니다. 위의 예시에서는 log 함수 안의 name 변수는 선언 시 가장 가까운 전역변수 name을 참조하게 됩니다. 그래서 wrapper 안에서 log를 호출해도 지역변수 name='test'를 참조하는 게 아니라 그대로 전역변수 name의 값인 beom 나오는 겁니다.


무슨 짓을 해도 log 함수가 한 번 선언된 이상, 전역변수를 가리키게 되어있는 name 변수가 다른 걸 가리키게 할 수 없습니다. 유일한 방법은 아까처럼 전역변수를 다른 값으로 바꾸는 겁니다.



