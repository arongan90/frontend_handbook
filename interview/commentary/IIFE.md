
## IIFE
___

> IIFE(Immediately Invoked Function Expressions: “Iffy”라고 발음)는 즉시 호출 함수 표현식의 줄임말입니다.


## `Function Declarations`

```js
function funcDeclarations() {
  return 'A function declaration';
}
funcDeclarations(); // 'A function declaration'
```
일반적인 프로그래밍 언어에서의 함수 선언과 비슷한 형식이다.


## `Function Expressions`

```js
var funcExpression = function () {
    return 'A function expression';
}
funcExpression(); // 'A function expression'
```


## `함수 선언식과 표현식의 차이점`

`함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.`
함수 선언식은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.

```js
logMessage();
sumNumbers();

function logMessage() {
  return 'worked';
}

var sumNumbers = function () {
  return 10 + 20;
};
```
logMessgae() 함수는 호이스팅에따라 실행이 되지만 sumNumbers()함수는 
> Uncaught TypeError: sumNumbers is not a function
에러를 나타내게 된다.


`함수 표현식이 호이스팅에 영향을 받지 않는다` 는 특징 이외에도 함수 선언식보다 유용하게 쓰이는 경우는 다음과 같다.

* 클로져로 사용
* 콜백으로 사용 (다른 함수의 인자로 넘길 수 있음)


## 즉시 호출 함수 표현식은 어떻게 작동하는가?
___

괄호쌍이 익명의 함수를 감싸서 함수 선언(declaration)을 함수 표현식(expression)으로 표현될 수 있습니다. 그러므로, 단순한 익명의 함수를 global 스코프에 선언하지 않고 어디서든 익명의 함수 표현식을 가질 수 있습니다.

```js
// 괄호 사용 안함
x = function () {};
// 괄호 사용
(x = function () {});
// 변수 x에는 함수의 값이 할당됩니다. 괄호로 둘러쌓인 함수는 익명의 함수 표현식이 됩니
```

이와 유사하게 이름을 부여하고, 즉시 호출된 함수 표현식으로 생성할 수 도 있습니다.

```js
(showName = function (name) {
  console.log(name || "No Name")
  }
) (); // No Name
showName("Rich"); // Rich
showName(); // No Name
```

* showName 함수는 선언과 동시에 실행이 되며, 이름이 있으므로 나중에 호출 할수도 있습니다.

* 익명의 표현식은 나중에 다시 호출할 수 없습니다. 참조할 방법이 없기 때문입니다.
* 익명의 함수를 괄호안에(group context) 위치시킬 경우, 전체 그룹을 평가(evaluate)하고 값을 리턴합니다. 결국, 리턴값은 익명 함수 자신입니다.
* 마지막 두개의 괄호는 JS컴파일러에게 이 익명 함수를 바로 호출하라고 말합니다. 이것을 `IIFE`라고 부릅니다.

## `언제 IIFE를 사용하는가?`

젼역 영역(Global Scope)를 오염 시키지 않기 위해서

IIFE를 사용하는 주된 이유는 변수를 전역(global scope)으로 선언하는 것을 피하기 위해서 입니다. 많은 JavaScript 라이브러리와 전문가들이 이 기법을 사용합니다. jQuery plugin개발자들 사이에서 특히 인기가 많습니다. JS어플리케이션의 Top-Level - main.js 또는 app.js와 같은 - 에서도 IIFE를 사용할 수 있습니다. 아래 코드는 지역 변수를 익명 함수로 위치시켜 외부와의 충돌을 방지할 수 있습니다.

```js
 // All the code is wrapped in the IIFE
(function () {
    var firstName = “Richard”;
    function init () {
        doStuff (firstName);
        // code to start the application
    }
    function doStuff () {
        // Do stuff here
    }
    function doMoreStuff () {
        // Do more stuff here
    }
    // Start the application
    init ();
}) ();
```

필요한 경우 마지막 괄호안에 외부 객체나 변수를 넣어 익명의 함수에 전달할 수 도 있습니다.


