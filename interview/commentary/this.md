
## this Keyword
___

>`this`가 가리키는 것은 코드의 실행 위치, 실행 방법에 따라 달라진다

```js
const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42
 ```

```js
// 웹 브라우저에서는 window 객체가 전역 객체
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```
>global globalThis 프로퍼티를 사용하여 코드가 실행중인 현재 컨텍스트와 관계없이 항상 전역 객체를 얻을 수 있습니다.


```js
function nonStrictMode() {
  return this
}

function strictMode() {
  'use strict'
  return this
}

console.log(nonStrictMode()) // window
console.log(strictMode()) // undefined
console.log(window.stricMode()) // window
```
>strict-mode에서는 전역 객체냐 일반 객체냐에 따라 함수내부에 this 의 결과가 다르다는 차이는 있죠. 그러나 이 문제 또한 window 를 함수 호출 앞에 붙여주면 해결됩니다.


```js
function NewObject(name, color) {
  this.name = name
  this.color = color
  this.isWindow = function() {
    return this === window
  }
}

const newObj = new NewObject('nana', 'yellow')
console.log(newObj.name) // nana
console.log(newObj.color) // yellow
console.log(newObj.isWindow()) // false

const newObj2 = new NewObject('didi', 'red')
console.log(newObj2.name) // didi
console.log(newObj2.color) // red
console.log(newObj2.isWindow()) // false
```
>new 키워드로 새로운 객체를 생성했을 경우 생성자 함수 내의 this 는 new 를 통해 만들어진 새로운 변수가 됩니다. newObj, newObj2는 같은 생성자 함수로 만들어진 객체이지만 완전히 별도의 객체이기 때문에 각 객체의 속성들은 서로 관련이 없습니다. 만약 new 키워드를 빼먹으면 어떻게 될까요?

```js
const withoutNew = NewObject('nana', 'yellow')
console.log(withoutNew.name) // error
console.log(withoutNew.color) // error
console.log(withoutNew.isWindow()) // error
```
>new 키워드가 없으면 일반적인 함수 실행과 동일하게 동작하므로, NewObject 함수내의 this 는 window 객체가 됩니다. 하지만 withoutNew가 함수 실행의 결과값이 할당되므로 각 property 를 가져올 수 없습니다. 그렇다면, 생성자 함수가 아닌 일반 객체에서는 어떨까요?

```js
const person = {
  name: 'john',
  age: 15000,
  nickname: 'man from earth',
  getName: function() {
    return this.name
  },
}
console.log(person.getName()) // john

const otherPerson = person
otherPerson.name = 'chris'
console.log(person.getName()) // chris
console.log(otherPerson.getName()) // chris
```
>생성자 함수와 크게 다르지 않습니다. 한가지 눈여겨 볼 점은 otherPerson.name을 chris로 설정한 뒤 person.getName() 호출하면 그 결과는 chris입니다. 그 이유는 otherPerson 은 person 의 레퍼런스 변수이므로 하나(otherPerson)를 변경하면 다른 하나(person)도 변경됩니다. 이를 피하기 위해서는 Object.assign()메서드(ES6 지원)를 이용하여 완전히 별도의 객체로 만들어야 합니다.

```js
const person = {
  name: 'john',
  age: 15000,
  nickname: 'man from earth',
  getName: function() {
    return this.name
  },
}
const newPerson = Object.assign({}, person)
newPerson.name = 'chris'
console.log(person.getName()) // john
console.log(newPerson.getName()) // chris
```


```js
const testObj = {
  outerFunc: function() {
    function innerFunc() {
      console.log(this) // window
    }
    innerFunc()
  },
}
testObj.outerFunc()
```
>outherFunc 가 외부에서 실행(testObj.outerFunc())되면 this 는 testObj 입니다. 그리고 outerFunc 내부에서 innerFunc 가 호출할때는 그 어떤 문맥도 지정하지(바인드되지) 않았습니다. 전역 context(window)에서 실행되었다는 것이죠. 이게 바로 (비엄격모드에서) innerFunc 의 this 가 window 가 되는 이유 입니다.





```js
function Family(firstName) {
  this.firstName = firstName
  const names = ['bill', 'mark', 'steve']
  names.map(function(lastName, index) {
    console.log(lastName + ' ' + this.firstName)
    console.log(this)
  })
}
const kims = new Family('kim')
// bill undefined
// window
// mark undefined
// window
// steve undefined
// window
```
>map 메서드의 서브루틴은 호출될때 map 의 context(this)로 바인드 되지 않습니다. 바인드 되지 않았다는 것은 실행문맥이 전역이라는 것이고 실행문맥이 전역이란 말은 (비엄격모드에서) 서브루틴 내 this 가 window라는 것입니다. 수정하면 다음과 같다.

```js
function Family(firstName) {
  this.firstName = firstName
  const names = ['bill', 'mark', 'steve']
  const that = this
  names.map(function(value, index) {
    console.log(value + ' ' + that.firstName)
  })
}
const kims = new Family('kim')
// bill kim
// mark kim
// steve kim
```

이에 대한 해결책 `bind`!!!

```js
function Family(firstName) {
  this.firstName = firstName
  const names = ['bill', 'mark', 'steve']
  names.map(
    function(value, index) {
      console.log(value + ' ' + this.firstName)
    }.bind(this)
  )
}
const kims = new Family('kim')
```

이보다 더 편리한 `arrow function`!!

```js
function Family(firstName) {
  this.firstName = firstName
  const names = ['bill', 'mark', 'steve']

  names.map((value, index) => {
    console.log(value + ' ' + this.firstName)
  })
}
const kims = new Family('kim')
```

그럼 일반 함수형태에서 arrow 함수를 사용했을때 어떤 차이가 있을까요? arrow 함수 또한 ES6 에서만 지원하기 때문에 babel 사이트에서 변환해보겠습니다.

![](../src/babel1.png)

1. 함수 실행에 new 키워드를 사용하면, 그 함수 안에서 this 키워드는 새로운 객체를 가리킨다.
2. apply, call, bind를 사용해 함수를 호출/생성 했다면, 함수 안에서 this 키워드는 apply, call, bind 호출시 전달된 객체를 가리킨다.
3. 함수가 객체의 메소드로서 호출되었다면, this는 그 함수를 속성(property)으로 추가한 객체를 가리킨다.
4. 함수가 단순히 실행되었다면, 다시말해 위의 3가지 사례를 제외한 방식으로 호출되었다면, this는 전역 객체를 가리킨다. 브라우저에서는 window, node에서는 global이 된다. 만약 strict 모드(‘use strict’)에서는 this는 전역 객체 대신 undefined가 된다.
5. 만약 위의 4가지 조건이 중첩된다면, 먼저 제시한 규칙이 적용된다. (1번 규칙부터 우선함)
6. 함수가 ES2015의 화살표 함수라면, 위의 규칙을 모두 무시하고, 함수가 만들어진 시점에서 그 함수를 둘러싼 scope의 this를 가리킨다.



>결론 : this 는 누가 호출했느냐에 따라 결정된다는 것입니다. ES6 문법을 사용하면 this 를 사용할때 문제점을 완화할 수 있습니다.
