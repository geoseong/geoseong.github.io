## 페이지
- 대문
- 헤더
- 사이드바
- 내용
- 댓글
- 새로운 token얻기 : 관리자 전용 = token정보가 지워졌을 때

## 서버호출
- access_token 얻기

## Refresh Token 받기
- 페이지 처음 로드할때 Reducer에 Token이 존재하는지 확인
    - 존재하지 않으면 token을 서버에서 호출해서 리듀서에 넣어 놓는다
    - 존재한다면 사이드바 리스트 불러와보기 (OneNote 호출이다.)

    - 근데 token존재확인을 어디 영역에서 하지??
        - components의 최상위에서 token을 얻어오자. : src/components/app.js 애서.

## OneNote의 구조
- Notebooks
    `GET notebooks` -> 해당 Notebook 목록이 나오고, 각 Notebook들에 대한 sectionsUrl이 표시됨
    - Sections
        `GET notebooks/${notebookId}/sections` -> 해당 Notebook의  Section 목록들이 나오고, 각 Section들에 대한 pagesUrl이 표시됨
        - Pages
        `GET pages/${pageId}/content` -> Page내용이 html로 나옴.

## 주소에 따른 로직처리
- url example  
```
    http://localhost:3001/aws_0-BC575AB8E2AB9833!2006
    http://localhost:3001/aws_0-b39225f08c56b6458696da076b2b5d4a!1-BC575AB8E2AB9833!2006
```

- if (0-과 1-이 있다면..)
    - 0과 1전체 : 페이지id
    - 1은 : 섹션id
- if (0-만 있다면..)
    - 0은 : 섹션id