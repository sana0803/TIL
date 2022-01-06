# REST

## 정의

- **REST**(Representational State Transfer) : 월드 와이드 웹과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처의 한 형식. 자원을 정의하고 자원에 대한 주소를 지정하는 방법의 모든 것을 말한다.
- REST는 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기 때문에 웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일이다.
- REST는 네트워크 상에서 Client와 Server 사이의 통신 방식 중 하나이다.



## 구체적 개념

- HTTP URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시하고, HTTP Method(POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미한다.
- 웹의 모든 자원에 고유한 ID인 HTTP URI를 부여한다.
- **CRUD Operation**
  Create : 생성(POST)
  Read : 조회(GET)
  Update : 수정(PUT)
  Delete : 삭제(DELETE)



## REST API

- **API**(Application Programming Interface) :  컴퓨터나 컴퓨터 프로그램 사이의 연결. 컴퓨터와 인간을 연결시키는 사용자 인터페이스(UI)와 반대로, **API**는 컴퓨터나 소프트웨어를 서로 연결한다.
- REST API는 REST 기반으로 서비스 API를 구현하는 것을 의미한다.



### REST API 설계 규칙

1.  URI는 동사보다는 명사를, 대문자보다는 소문자를 사용하여야 한다.
2. URI 마지막에 슬래시(/)를 포함하지 않는다.
3. 언더바 대신 하이픈을 사용한다.
4. 파일 확장자는 URI에 포함하지 않는다.
5. 행위(ex. delete, post)를 포함하지 않는다.



## RESTful

- REST의 원리를 따르는 시스템. REST API의 설계 규칙을 올바르게 지킨 시스템을 RESTful하다 말할 수 있다.
- RESTful은 REST를 REST 답게 쓰기 위한 방법으로, 누군가가 공식적으로 발표한 것은 아니다.