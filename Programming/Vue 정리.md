# Vue 정리

## Vue instance

- 모든 vue 앱은 vue 함수로 새 인스턴스를 만드는 것부터 시작
- Vue 인스턴스를 생성할때는 Options 객체를 전달해야 함
  - 여러 Options들을 사용하여 원하는 동작을 구현
- Vue instance === Vue component

```js
cont app = new Vue({

})
```



## Options/DOM - 'el'

- Vue 인스턴스에 연결(마운트)할 기존 DOM 엘리먼트가 필요
- CSS 선택자 문자열 혹은 HTMLElement로 작성
- new를 이용한 인스턴스 생성때만 사용

```js
cont app = new Vue({
	el: '#app'
})
```



## Options/Data - 'data'

- Vue 인스턴스의 데이터 객체
- Vue 앱의 상태 데이터를 정의하는 곳 (vue에서 사용되는 정보 저장, 객체 또는 함수의 형태)
- Vue template에서 interpolation을 통해 접근 가능
- v-bind, v-on과 같은 디렉티브에서도 사용 가능
- Vue 객체 내 다른 함수에서 **this 키워드**를 통해 접근 가능
- 주의
  - 화살표 함수를 `data`에서 사용하면 안됨
  - 화살표 함수가 부모 컨텍스트를 바인딩하기 때문에 , `this`는 예상과 달리 Vue 인스턴스를 가리키지 않음

```js
cont app = new Vue({
	el: '#app',
    data: {
        message: 'Hello',
    }
})
```



## Options/Data - 'methods'

- Vue 인스턴스에 추가할 메서드 (화면 로직 제어와 관계된 methods를 정의하는 속성. 마우스 클릭 이벤트 처리와 같이 화면의 전반적인 이벤트와 관련된 로직을 추가)
- Vue template에서 interpolation을 통해 접근 가능

- v-on과 같은 디렉티브에서도 사용 가능
- Vue 객체 내 다른 함수에서 **this 키워드**를 통해 접근 가능

- 주의
  - 화살표 함수를 메서드를 정의하는데 사용하면 안됨
  - 화살표 함수가 부모 컨텍스트를 바인딩하기 때문에, `this`는 Vue 인스턴스가 아니며 `this.a`는 정의되지 않음

```js
cont app = new Vue({
	el: '#app',
    data: {
        message: 'Hello',
    },
    methods: {
        greeting: function () {
            console.log('hello')
        }
    }
})
```



## this keyword in vue.js

- Vue 함수 객체 내에서 vue 인스턴스를 가리킴
- 단, JavaScript 함수에서의 this 키워드는 다른 언어와 조금 다르게 동작하는 경우가 있음

- 화살표 함수를 사용하면 안되는 경우
  1. data
  2. method 정의



## Template Syntax

- 렌더링 된 DOM을 기본 Vue 인스턴스의 데이터에 선언적으로 바인딩 할 수 있는 HTML 기반 템플릿 구문을 사용

1. Interpolation
2. Directive



### Interpolation (보간법)

1. Text

   - `<span>메시지: {{ msg }}</span>`
   - v-once 디렉티브를 사용하여 데이터 변경 시 업데이트 되지 않는 일회성 보간을 수행

2. Raw HTML 

   - `<span v-html="rawHtml"></span>`

3. Attributes

   - `<div v-bind:id="dynamicId"></div>`

4. JS 표현식

   - {{ number + 1 }}

   - {{ message.split('').reverse().join('') }}

   - {{ ok? 'YES' : 'NO' }}
   
     

### Directive (디렉티브)

- v- 접두사가 있는 특수 속성
- 속성 값은 단일 JS 표현식이 됨 (v-for는 예외)
- 표현식의 값이 변경될 때 반응적으로 DOM에 적용하는 역할을 함
- 전달인자 (Arguments)
  - `:` (콜론)을 통해 전달인자를 받을 수도 있음
- 수식어 (Modifiers)
  - `.` (점)으로 표시되는 특수 접미사
  - 디렉티브를 특별한 방법으로 바인딩 해야 함을 나타냄

![image-20210807155717878](Vue 정리.assets/image-20210807155717878.png)



##  pass props & emit events

- 컴포넌트는 부모-자식 관계에서 가장 일반적으로 함께 사용하기 위함

- 부모는 자식에게 데이터를 전달(pass props)하며, 자식은 자신에게 일어난 일을 부모에게 알림(emit event)
- `props`는 아래로, `events`는 위로
- 부모는 `props`를 통해 자식에게 데이터를 전달하고, 자식은 `events`를 통해 부모에게 메시지를 보냄



### Props

- props는 상위 컴포넌트의 정보를 전달하기 위한 사용자 지정 특성
- 하위 컴포넌트는 props 옵션을 사용하여 수신하는 props를 명시적으로 선언해야 함
- 데이터는 props 옵션을 사용하여 하위 컴포넌트로 전달됨
- 하위 컴포넌트의 템플릿에서 **상위 데이터를 직접 참조할 수 없음**

- script에선 `camelCase`로 작성 / HTML에선 `kebab-case `로 작성

```js
props: {
    myMessage: String, // 적어도 type은 적어줄 것
    required: true,
}
```



### 단방향 데이터 흐름

- 모든 props는 하위 속성과 상위 속성 사이의 단방향 바인딩
- 부노의 속성이 변경되면 자식 속성에게 전달되지만, 반대 방향으로는 안됨
- 부모 컴포넌트가 업데이트 될때마다 자식 요소의 모든 props들이 최신 값으로 업데이트 됨



### Emit events

- $emit(event)
  - 현재 인스턴스에서 이벤트를 트리거
  - 추가 인자는 리스너의 **콜백 함수로 전달**
- 부모 컴포넌트는 자식 컴포넌트가 사용되는 템플릿에서 `v-on`을 사용하여 자식 컴포넌트가 보낸 이벤트를 청취 (v-on을 이용한 사용자 지정 이벤트)
- 컴포넌트 및 props와는 달리, 이벤트는 자동 대소문자 변환을 제공하지 않음
- 항상 자동으로 소문자 변환되기 때문에 v-on:myEvent는 자동으로 v-on:myevent로 변환
- 이러한 이유로 이벤트 이름에는 `kebab-case `를 사용하는 것을 권장

```js
this.$emit('myEvent', this.보낼데이터) // => ('my-event')
```

