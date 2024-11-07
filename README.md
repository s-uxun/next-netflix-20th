# 6주차 미션: Next-Netflix

## 서론

안녕하세요, 프론트 운영진 **김승완**입니다 🐶🍮

이번주는 저번주 과제를 이어 Netflix를 완성해봅시다. 이번주 과제의 목표는 지난주에 이어 figma로 주어지는 디자인을 사용해 스타일링을 하는 방법과 SSR에 익숙해지는 것입니다. 추가적으로 성능 최적화 방법에 대해서도 생각해보는 것도 좋을 것 같습니다.

이번주도 화이팅입니다~!!💪

## 미션

### 미션 목표

- Next.js 사용법을 공부해봅니다.
- Figma로 주어지는 디자인으로 스타일링 하는 방식에 익숙해집니다.
- Git을 이용한 협업 방식에 익숙해집니다.
- 프론트엔드와 백엔드 시스템에 대한 흐름을 이해합니다.

### 기한

- 2024년 11월 09일 토요일(기한 엄수)

### 필수 요건

- [결과화면](https://next-netflix-18th-2.vercel.app/)의 상세 페이지와 검색 페이지를 구현합니다.
  - 상세 페이지는 동적 라우팅을 이용해 구현합니다.
  - 검색 페이지는 실시간 키워드 검색으로 구현합니다.
- [Figma](https://www.figma.com/file/UqdXDovIczt1Gl0IjknHQf/Netflix?node-id=0%3A1)의 디자인을 그대로 구현합니다.
- **SSR**을 적용해서 구현합니다.
- Open api를 사용해서 데이터 패칭을 진행합니다. (ex. [themoviedb API](https://developers.themoviedb.org/3/getting-started/introduction))

### 선택 사항

- 검색 페이지 무한스크롤을 구현합니다.
- 검색 페이지 스켈레톤 컴포넌트를 구현합니다.
- 성능 최적화를 위한 방법을 적용해봅니다.

## **Key Question**

- React 18 버전의 변경점에 대해 설명해주세요.(+ 19 버전에 대한 추가 설명도 좋습니다)
  - 서버 컴포넌트와 클라이언트 컴포넌트
  - lazy loading과 Suspense 컴포넌트
  - automatic batching, 동시성 모드 등 추가적으로 더 설명해주셔도 됩니다!
- nextJS 13 이후의 app routing 방식의 특징과 기능에 대해 설명해주세요.
  - 13 이전의 페이지 라우팅과의 디렉터리 구성 변화
  - nextJS가 백엔드 시스템을 녹여내는 방법
  - 패러랠, 인터셉팅 라우트란 무엇인가?
  - nextJS에서 SSR, SSG를 구현하는 방법
- vercel, netlify 같은 호스팅 플랫폼의 특징과 내부 구현 원리에 대해 설명해주세요(+ aws의 스토리지와 인스턴스 등 생태계에 대해서도 알려주세요)

## 링크 및 참고자료

- [useCallback과 React.Memo를 이용한 렌더링 최적화](https://velog.io/@yejinh/useCallback%EA%B3%BC-React.Memo%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94)
- [성능 최적화](https://ui.toast.com/fe-guide/ko_PERFORMANCE)
- [더 나은 UX를 위한 스켈레톤 UI 만들기](https://ui.toast.com/weekly-pick/ko_20201110)
- [React에서 무한 스크롤 구현하기](https://tech.kakaoenterprise.com/149)
- [React 18의 새로운 기능](https://www.youtube.com/watch?v=7mkQi0TlJQo)
- [react 서버 컴포넌트가 해결하는 문제들 in kakao 기술 블로그](https://tech.kakaopay.com/post/react-server-components/)
- [vercel의 배포 방식](https://www.youtube.com/watch?v=8q-jCvLWwKc&t=11s)
- [클라우드 전반의 이해](https://www.youtube.com/watch?v=YSudWlx0o9I)
