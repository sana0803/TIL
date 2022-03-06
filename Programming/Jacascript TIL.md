# Jacascript

### git

```bash
$ git remote add [이름(upstream)] 원본주소
upstream
origin
$ git pull upstream develop (원본 레포에서 pull 받기)
```



### 02.24

- [자바스크립트 주기적인 실행(setInterval, setTimeout) ](https://offbyone.tistory.com/241)

- [localStorage 와 sessionStorage ](https://ko.javascript.info/localstorage)

- [sessionStorage-MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/sessionStorage)

  ```react
  // 캐시가 있을 때, 캐시 사용
  // 없을 때 axios API 호출 => 세션 스토리 저장
  if(sessionStorage.getItem(e.target.value)){    dispatch(search(JSON.parse(sessionStorage.getItem(e.target.value))))
  }
  else if (e.target.value) {
      const URL = API + e.target.value;
      const items = await axios.get(URL);
      sessionStorage.setItem(e.target.value, JSON.stringify(items.data.slice(0, 7)))
      dispatch(search(items.data.slice(0, 7)));
  }
  ```

- [JSON stringfy](https://jiwontip.tistory.com/71)
- [location.href 와 location.replace() 의 차이](https://blogpack.tistory.com/592)

- [디바운싱과 쓰로틀링](https://velog.io/@yujuck/Javascript-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8A%A4%EC%99%80-%EC%93%B0%EB%A1%9C%ED%8B%80%EB%A7%81)

- [git stash 사용법 : 커밋하지 않고 변경사항 저장하는 방법](https://www.lainyzine.com/ko/article/git-stash-usage-saving-changes-without-commit/)

- [setTimeout() 과 clearTimeout()](http://lab.naminsik.com/1862)

- [Object.assign()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)




### 02.25

- [if와 '?'를 사용한 조건 처리](https://ko.javascript.info/ifelse)



### 02.28

- forEach와 map()의 차이
- 리액트18의 특징에 대해 아는지?
- 디바운스 쓰로틀
- 클로저
- 이벤트 루프란?
- 함수형 컴포넌트, 클래스형 컴포넌트 차이
- 리액트의 라이프사이클
- 리액트 훅스
- 최근 git 트렌드에서 관심 있는거 뭔지
- CSR, SSR 차이
- next.js



### 03.03

- [Object.entries()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

- [String.prototype.replace()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

  - `global`과 `ignore`를 사용한 `replace()`
  - /'str'/gi (global, ignore)
  - global은 모든 글자 없애는건데 정규식으로만 수행 가능
  - ignore은 대소문자 상관없이 변환 `str.replace(/xmas/i, 'Christmas')`



### 03.04

- 스크롤 이벤트로 무한 스크롤 구현
  - https://velog.io/@jce1407/React-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-with-Intersection-Observer
- 쓰로틀링
  - https://darrengwon.tistory.com/1312
  - http://yoonbumtae.com/?p=3584
  - https://velog.io/@bluestragglr/Debounce%EC%99%80-Throttle-%ED%9A%A8%EA%B3%BC%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%ED%95%B8%EB%93%A4%EB%A7%81%ED%95%98%EA%B8%B0
- netlify 배포

- 브라우저