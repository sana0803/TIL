# TypeScript



### Typescript VS Javascript

| Typescript                        | Javascript                    |
| --------------------------------- | ----------------------------- |
| 정적 타입(static type)            | 동적 타입(dynamic type)       |
| 변수 타입이 compile time에 결정됨 | 변수 타입이 run time에 결정됨 |


- 정적타입 : 변수의 타입이 컴파일 타임에 결정됨

  - ex) Java, C++

- 동적타입 : 변수의 타입이 런타임에 결정됨

  - ex) Python, PHP


### 정적 타입 언어 VS 동적 타입 언어

| 정적 타입(static type) 언어         | 동적 타입(dynamic type) 언어     |
| ----------------------------------- | -------------------------------- |
| 진입 장벽 ⬆ (변수 선언시 타입 지정) | 진입 장벽 ⬇                      |
| 코드의 양이 많을때 생산성이 높다    | 코드의 양이 적을때 생산성이 높다 |
| 타입 오류가 컴파일 시 발견된다      | 타입 오류가 런타임 시 발견된다   |



DefinitelyTyped : 어떤 라이브러리의 타입 정의 파일이 있는지 검색 가능

https://www.typescriptlang.org/dt/search?search=



```bash
npm install typescript # 설치
npx tsc --init	# tsconfig.json 파일 (ts 설정 파일)
```

![image-20220527134915660](1_TypeScript란.assets/image-20220527134915660.png)

- 특별한 이유가 없다면 strict는 `true`로 설정. 이렇게 해야 ts의 장점을 살릴수 있음.
- 기존에 js로 되어있는 프로젝트를 ts로 포팅하는 경우에는 strict를 `false`로 해두고 각각의 strict 옵션을 true로 바꿔주면서 점진적으로 적용해나가는것도 괜찮은 방법임.



- ts 파일을 js로 컴파일 할땐 터미널에 `npx tsc` 입력
- ts에서 타입 정보는 컴파일 타임에만 사용된다.



- lodash 설치

`npm install lodash`

`lodash`의 타입 정의 파일 `npm install @types/lodash` 설치.

그 후 `isEqual()` 함수 사용 가능.



vs code 익스텐션 code runner 설치.

code runner를 이용해서 타입스크립트를 컴파일 하기 위해선 ts-node 설치해야함.

```bash
npm install ts-node
```

`command + ,`눌러서 executorMap 검색. 빨간 동그라미 부분 클릭.

![image-20220527142714174](1_TypeScript란.assets/image-20220527142714174.png)

![image-20220527142744613](1_TypeScript란.assets/image-20220527142744613.png)

위와 같이 입력해주기.

![image-20220527142819555](1_TypeScript란.assets/image-20220527142819555.png)

실행하고 싶은 부분을 선택해 `control + option + n`을 눌러 실행 가능하다.

*[타입스크립트의 플레이그라운드 사이트](https://www.typescriptlang.org/play)를 이용해도 실행 가능하다.