

타입스크립트는 프로그래밍 언어임과 동시에 컴파일러

tsc 명령어를 사용해서 타입스크립트를 자바스크립트로 변환가능

타입스크립트는 자바스크립트를 기반으로 한 언어 자바스크립트에서 유효한 코드는 타입스크립트에서도 유효함.

> npm install -g typescript

프로젝트에 상관없이 global 전체적으로 사용할수 있도록 하는것

---> 위에것은 타입스크립트를 자바스크립트로 변환해주는 컴파일러를 받는것이다.

> tsc app.ts

---> js 파일로 컴파일 해준다.


> tsc --init

---> tsconfig.json 파일이 생성된다.

> tsc -w

---> 실시간으로 바뀔때마다 컴파일해준다.

Static Typing?? (정적 타이핑)

타입을 선언하고 선언된 파일에 맞는 값만 할당 또는 반환되어야한다는 말



타입별칭(Type Aliases)

```ts
type StrOrNum = number | string;
let totalCost: numver;
let orderId: StrOrnum;

const calculateTotalCost = (price:StrOrNum, qty: number):void => {

}

```


타입가드 종류 자료조사하면 유용한점이 많을거 같다.


기본매개변수
```ts
function sendGreeting(message:string, userName = 'there'):void{
    console.log(`${message}, ${userName});
}
```

