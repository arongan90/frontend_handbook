forEach와 map의 차이점이 무엇이며, 어떤 메소드를 사용해야 하는가?
--> 콜백 리턴값으로 맵핑을 하느냐, 하지 않느냐

익명 함수를 사용하는 사례에는 어떤 것들이 있나?
--> IFE, callback ⇒ 다른 곳에서 참조할 일이 없는 것들

호스트 객체와 네이티브 객체의 차이점
--> 표준 객체와 런타임 환경 객체

unction Person(){}이 있을 때, var person = Person()과 var person = new Person()의 차이점은?
--> 함수를 생성자로 사용하느냐, 일반 호출로 사용하느냐의 차이.

Function.prototype.call과 Function.prototype.apply 의 차이점은?
--> this 객체를 지정한다는 것은 같지만, 함수 파라미터 전달방식에 차이가 있다.

Function.prototype.bind
-->this 키워드가 지정된 새 함수를 만든다.
  
document.write를 사용하겠는가?
--> 아니오. 기존의 html, body 모두 날아감

feature detection, feature inference, 그리고 UA 문자열에 대해서 설명하라
-->  브라우저가 어떤 기능을 지원하는지 확인하기 위한 테크닉들이다.

Ajax의 장점과 단점은 무엇인가?
--> SPA의 그것과 거의 같다. 동적인 웹 구현을 가능하게 하지만 그만큼 댓가도

JSONP가 어떻게 동작하는지 설명
--> 다른 도메인에 있는 서버에서 클라이언트의 전역 함수를 호출하는 테크닉이다.

자바스크립트 templating을 사용해 본 적이 있는가? 어떤 라이브러리로?
--> React

hoisting에 대해서 설명하라
--> 같은 스쿠프라면 아래쪽 줄에 있는 변수를 윗줄에서 참조 가능하도록 하는 자바스크립트의 특징. 
 하지만 변수에 할당된 값은 알려주지 않는다.

이벤트 버블링에 대해서 설명하라
--> DOM 이벤트가 상위 요소(element)로 전파되는 현상

attribute와 property의 차이점이 무엇인가?
--> attribute도 DOM property 중 하나다

 Javascript 내장 객체를 확장하는 것이 왜 좋은 방법이 아닌가?
--> 나만 확장한 것이 아니라 다른 사람도 확장했다면? 충돌은?

document의 load 이벤트와 DOMContentLoaded의 차이점은?
--> 실행 시점이 페이지에 포함된 리소스가 모두 로딩된 후인지 아닌지의 차이

=== 과 == 연산자의 차이는?
--> == 추상적인 등가 연산자, ===는 엄격한(strict) 등가 연산자다.


자바스크립트와 관련한 same-origin 정책에 대해 설명
--> 다른 도메인의 스크립트를 사용한 해킹 방지

왜 Ternary 표현식이라 불리며 “Ternary”이라는 단어가 가리키는 것은?
--> 삼항 연산자 표현식. condition ? then : else

“use strict”가 무엇인가? 이것을 사용하는것의 장점과 단점은?
--> 일부 기능을 제한한다는 의미. 오류 방지 목적을 가지며 단점보다는 장점이 많음

웹사이트의 전역 scope를 건드리지 않고 그대로 두는 것이 좋은 이유는?
--> 변수와 함수 이름의 충돌을 방지하기 위해

SPA 앱이 무엇인지, 그리고 SEO는 어떻게 해야 하는지
-->  클라이언트 사이드 렌더링 웹사이트

Promise와 그것의 polyfill에 대해서는 얼만큼의 경험을 가지고 있는가?
--> Promise는 비동기적으로 값을 리턴하는 객체다
--> 잘 알려진 polyfill로는 jquery $.deferred , Q, Bluebird가 있지만 
전부 표준 스펙을 만족시키진 못한다. ES2015는 프로미스를 지원하며 이제 polyfill은 필요하지 않다.

콜백대신 프로미스를 사용하는 것의 장점과 단점은?
--> 비동기 작업을 더 쉽게 구현할 수 있다는 장점. 단점은 딱히..?

자바스크립트로 컴파일되는 언어를 사용하는 것의 장/단점
--> 정적 타입 지원 등 자바스크립트의 한계를 보완해준다. 하지만 자바스크립트도 ES2015 이후 무척 좋아짐
//CoffeeScript, Elm, ClojureScript, PureScript, and TypeScript 등의 언어를 사용하는 것을 말한다.

객체 속성, 배열 항목 반복(iterate)에 어떤 방법을 사용하는가?
--> for-in + hasOwnProperty, Object.keys, 베열 - for-of

mutable, immutable 객체의 차이점
--> 이미 선언된 값의 수정 가능, 불가능 여부

 코드를 작성할 때 불변성을 어떻게 구현하는지
-->  const, spread opeartor, Object.assign, Array.prototype.concat

동기, 비동기 함수의 차이점
-->  코드의 순차적인 실행 vs 콜백에 전달된 코드를 나중에 실행

이벤트 루프란 무엇인가? 콜 스택과 태스크 큐의 차이점은?
--> 기 함수는 스택에 즉시 추가, 비동기 콜백은 태스크 큐에 대기하고 있다가 이벤트 루프가 스택에 추가

ES6의 클래스와 ES5의 생성자 함수의 차이점
--> 둘 다 생성자 역할을 하지만 상속을 구현하는 방법에서 큰 차이가 있다.



화살표 함수를 어떻게 사용하면 좋은지, 기존 함수와의 차이점은 무엇인지
--> 간단한 문법, 함수 안의 this가 선언된 scope의 this를 가리키는 lexical scoping

생성자 함수에서 메소드 선언에 화살표 함수를 선언하는 것의 장점은?
--> this가 바뀌지 않는다. 항상 같은 객체를 가리킨다.

고차 함수(higher-order function)란?
--> 파라미터로 함수를 받거나, 함수를 리턴하는 함수

구조 분해 할당(destructuring) 예제를 보여줄 수 있는가?
--> ES6에서 도입된 객체, 배열의 멤버를 간단하게 추출할 수 있는 문법

문자열 생성에 있어 큰 유연성을 제공하는 템플릿 리터럴의 예제를 보여달라
--> result is ${data}

curry 함수의 예제, 그리고 curry 함수가 제공하는 장점은?
--> 함수 파라미터가 n개라면, 총 n번 호출해야 실제로 실행되는 함수를 만든다. 함수형 프로그래밍에 유용하다

spread 문법과 장점과 rest 문법과의 차이점은?
--> spread ⇒ 데이터를 풀어놓는다, rest ⇒ 전달받은 데이터를 배열, 객체 안에 채워넣는다

파일 사이에서 코드를 어떻게 공유하는가?
-->  CommonJS, AMD, ES modules 를 사용한다

static 클래스 멤버를 사용하는 이유는?
--> 객체 인스턴스의 영향 없음. 설정 값, 유틸리티 함수로 활용

let, var, const 를 사용해 선언된 변수의 차이점
--> var는 함수 레벨 스쿠프. let, const는 블럭 레벨 스쿠프.



this??
xmlhttprequest
서블렛도 servlet
Json || xmrh
strict 모드
