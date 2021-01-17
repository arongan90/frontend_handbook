## Closure
___

클로저는 외부함수(포함하고 있는)의 변수에 접근할 수 있는 내부 함수를 일컫습니다. 스코프 체인(scope chain)으로 표현되기도 합니다. 클로저는 세가지 스코프 체인을 가집니다

* 자신에 대한 접근(자신의 블럭내에 정의된 변수) 
* 외부 함수의 변수에 대한 접근
* 전역 변수에 대한 접근. 이렇게 3단계로 구분할 수 있습니다.

내부 함수는 외부 함수의 변수뿐만 아니라 파라미터에도 접근할 수 있습니다. 단, 내부 함수는 외부 함수의 arguments 객체를 호출할 수는 없습니다. (하지만, 외부 함수의 파라미터는 직접 호출할 수 있습니다.)

## `기본적인 클로저 예제`

```js
function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
    // 이 내부 함수는 외부함수의 변수뿐만 아니라 파라미터 까지 사용할 수 있습니다.
    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName();
}
showName("Michael", "Jackson"); // Your name is Michael Jackson
```

> 클로저는 Node.js의 비동기, 논-블록킹 아키텍처의 핵심기능으로 활용되고 있습니다. 클로저는 jQuery에서도 빈번히 사용되며, 거의 모든 자바스크립트 코드에서 볼 수 있습니다.

## `jQuery의 전형적인 클로저 예제`

```js
$(function() {
    var selections = [];
    $(".niners").click(function() { // 이 클로저는 selections 변수에 접근합니다.
        selections.push(this.prop("name")); // 외부 함수의 selections 변수를 갱신함
    });
});
```

## `클로저 규칙과 부수 효과`

클로저는 외부함수가 리턴된 이후에도 외부함수의 변수에 접근할수 있습니다.

클로저를 사용하면서 가장 헷갈리는것 중의 하나는 외부함수가 리턴된 이후에도 여전히 내부함수가 외부함수의 변수에 접근하고 있다는 것입니다.자바스크립트의 함수가 실행되었을때, 함수는 자신이 생성되었을때와 동일한 스코프 체인을 사용합니다. 그러므로, 당신은 내부 함수를 나중에 호출할 수 있습니다.

```js
function celebrityName(firstName) {
    var nameIntro = "This is celebrity is ";
    // 이 내부 함수는 외부함수의 변수와 파라미터에 접근할 수 있습니다.
    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}
var mjName = celebrityName("Michael"); // 여기서 celebrityName 외부함수가 리턴됩니다.
// 외부함수가 위에서 리턴된 후에, 클로저(lastName)가 호출됩니다.
// 아직, 클로저는 외부함수의 변수와 파라미터에 접근 가능합니다.
mjName("Jackson"); // This celebrity is Michael Jackson
```

> 클로저는 외부 함수의 변수에 대한 참조를 저장합니다.


클로저는 실제 값을 저장하지 않습니다. 클로저가 호출되기 전에 외부함수의 변수가 변경되었을때, 클로저는 더 흥미로워 집니다. 그리고, 이 강력한 기능은 창의적인 방법으로 활용될 수 있습니다. 아래의 내부(private) 변수예제는 더글라스 크락포드(Douglas Crockford)에 의해 처음 시연되었습니다:

```js
function celebrityID() {
    var celebrityID = 999;
    // 우리는 몇개의 내부 함수를 가진 객체를 리턴할것입니다.
    // 모든 내부함수는 외부변수에 접근할 수 있습니다.
    return {
        getID: function() {
            // 이 내부함수는 갱신된 celebrityID변수를 리턴합니다.
            // 이것은 changeThdID함수가 값을 변경한 이후에도 celebrityID의 현재값을 리턴합니다.
            return celebrityID;
        },
        setID: function(theNewID) {
            // 이 내부함수는 외부함수의 값을 언제든지 변경할 것입니다.
            celebrityID = theNewID;
        }
    }
}
var mjID = celebrityID(); // 이 시점에, celebrityID외부 함수가 리턴됩니다.
mjID.getID(); // 999
mjID.setID(567); // 외부함수의 변수를 변경합니다.
mjID.getID(); // 567; 변경된 celebrityID변수를 리턴합니다.
```


## `클로저 비꼬기`

클로저가 갱신된 외부함수의 변수에 접근함으로써, 외부 함수의 변수가 for문에 의해 변경될 경우 의도치 않은 버그가 발생할 수 있습니다.

```js
function celebrityIDCreator(theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i=0; i<theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function() {
            return uniqueID + i;
        }
    }
    return theCelebrities;
}
var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
var stalloneID = createIdForActionCelebs[0];
console.log(stalloneID.id); // 103
```

위의 예제에서, 익명의 내부함수가 실행될 시점에 i의 값은 3입니다(배열의 크기만큼 증가한 값). 숫자 3은 uniqueID에 더해져 모든 celebritiesID에 103을 할당합니다. 그래서, 기대(100,101,102)와 달리 모든 리턴된 배열의 id=103이 됩니다.

이런 결과가 나타난 이유는, 앞서 언급했듯이 클로저는(이 예제에서 내부의 익명함수)` 외부 변수에 대해 값이 아닌 참조로 접근하기 때문입니다`. 즉, 클로저는 최종 갱신된 변수(i)에 대해서만 접근할 수 있으므로, 외부 함수가 전체 for문을 실행하고 리턴한 최종 i의 값을 리턴하게 됩니다. 100+3=103.

> 이런 부작용을 고치기 위해서 “즉시 호출된 함수 표현식(Immediately Invoked Function Expression. IIFE)”를 사용할 수 있습니다.


```js
function celebrityIDCreator(theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i=0; i<theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function(j) {
            // j 파라미터는 호출시 즉시 넘겨받은(IIFE) i의 값이 됩니다.
            return function() {
                // for문이 순환할때마다 현재 i의 값을 넘겨주고, 배열에 저장합니다.
                return uniqueID + j;
            } () // 함수의 마지막에 ()를 추가함으로써 함수를 리턴하는 대신 함수를 즉시 실행하고 그 결과값을 리턴합니다.
        } (i); // i 변수를 파라미터로 즉시 함수를 호출합니다.
    }
    return theCelebrities;
}
var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
var stalloneID = createIdForActionCelebs[0];
console.log(stalloneID.id); // 100
var cruiseID = createIdForActionCelebs[1];
console.log(cruiseID.id); // 101
```