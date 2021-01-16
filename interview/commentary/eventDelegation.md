# 인터뷰 면접 상세설명


## Event Delegation
___
>이벤트 위임이란 `Event Listener는`를 부모 요소(element)에 붙이는 것을 말한다. 하위 요소에 이벤트가 발생하면 이벤트 버블링 때문에 부모 요소에 연결된 리스너가 실행된다.

장점
1. 사용하는 메모리의 양(memory footprint)이 감소한다. 이벤트가 발생하는 모든 요소마다 리스너를 추가할 필요가 없고 부모에 하나만 추가하면 되기 때문이다.
2. 이벤트 발생하는 요소가 추가되고 제거될때마다 리스너를 추가하고 제거할 필요가 없다.


## `Event Listener`
___
  >인터페이스는 EventTarget 객체로부터 발생한 이벤트를  처리하기 위한 오브젝트를 말합니다
  레거시 코드와의 호환성을 유지하기 위해서, `EventListener`는 함수 혹은 `handleEvent()` 함수를 가진 오브젝트를 인자로 받습니다.


```html
<button id="btn">여기를 눌러보세요!</button>
```
```js
const buttonElement = document.getElementById('btn');

// 콜백 함수를 제공함으로써 '클릭' 이벤트를 처리하는 핸들러를 추가합니다.
// 엘리먼트가 클릭될 떄마다, "누름!" 팝업이 나타날것입니다.
buttonElement.addEventListener('click', function (event) {
  alert('누름!');
});

// 호환성을 위해서, 함수가 아닌 `handleEvent` 속성을 가진 오브젝트도
// 똑같이 처리됩니다.
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    alert('handleEvent 함수로 누름!');
  }
});
```

## `EventTarget`
정리 후에하기
___
https://developer.mozilla.org/ko/docs/Web/API/EventTarget

