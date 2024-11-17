# 5 ~ 6주차 미션: Next-Netflix

## [🪄 결과물](https://next-netflix-20th-onedwo.vercel.app)

### 🩵 구현 기능

- 피그마 화면 구현

- SSR을 적용해서 구현

- Open api를 사용해서 데이터 패칭을 진행

- 동적 라우팅으로 상세 페이지 구현

- 실시간 키워드 검색으로 검색 페이지 구현

- 검색 페이지 무한스크롤 구현

- 레이지 로딩 및 스켈레톤 UI 적용

- 데이터 캐싱 및 컴포넌트 최적화

<br/>

### 🩵 느낀 점

**[송유선]** 지난주에 필수 기능들을 모두 구현했던 덕분에 이번에는 코드를 어떻게 최적화할지 고민하는 데 집중할 수 있었다. 우선 main 페이지에 갈 때마다 서버 컴포넌트가 데이터를 다시 불러오는 것을 막기 위해 { next: { revalidate: 300 } } 옵션을 추가해 5분 동안 데이터 캐싱을 적용했다. 이를 위해 기존 axios instance를 삭제하고 getContents 함수를 fetch로 리팩토링했다. 지난 스터디 피드백에서 들은 리액트 쿼리를 사용하지 않은 이유는, 리액트 쿼리를 쓰려면 use client를 붙여 클라이언트 컴포넌트로 만들어야 했기 때문이다. (최대한 서버 단에서 해결하고 싶었음...) 또, 검색 페이지에 레이지 로딩과 스켈레톤 UI를 적용했다. 원래는 메인에도 적용하려고 했는데 메인은 서버 컴포넌트라 레이지 로딩의 이점이 크지 않을 것 같았다. (+ 어느 정도 최적화된 상태라 레이지 로딩이며 스켈레톤이며 이것저것 쓰는 게 코드만 복잡해지고 더 별로일 것 같았음.) 근데!! 배포하고 보니 로컬에서와 달리 처음 로딩할 때 약간의 대기 시간이 있어서... 다음에 비슷한 플젝을 하게 된다면 next.js의 loading.tsx 를 활용해 스켈레톤 main 페이지를 따로 만든 다음에 적용시킬 것 같다. 이번에 못해서 아쉽... 그리고 검색은 이미 쿼리를 쓰고 있기도 하고 무한 스크롤이 적용되어 있으니까, 스켈레톤 UI로 사용자 경험을 향상시키고 레이지 로딩을 통해 불필요한 리소스 로드를 줄이고자 했다. 원래는 suspense로 처리했었는데, 스켈레톤이 1개만 뜨고 이후 10개가 다시 렌더링되는 문제가 있어 isLoading으로 따로 관리했다. 마지막으로 빌드 오류났던 디테일 페이지의 타입 정의 부분.. 저번 주는 급하니까 일단 params: any로 하고 냈었는데 이번에 다시 천천히 살펴보면서 인터페이스를 정의해 params의 타입을 명확히 하고 Promise<Params>로 비동기 처리를 해서 오류를 해결했다. (지난번에도 분명 비슷한 거 시도했던 거 같은데 그땐 왜 오류가 났었는지 의문...ㅋ큐ㅠㅠㅋ) 그 외에도 img 태그를 Image로 리팩토링하거나, 중복되는 부분을 함수로 묶어 깔끔하게 정리하는 등 최적화를 위해 자잘한 코드들을 수정했다. 지난주에 비해 들인 시간은 적지만, 그래도 지난주 못지않게 많은 걸 공부할 수 있었던 것 같다. <br>
(그리고 최고의 파트너 지원s..🤍 협업하면서 한 번도 힘든 적 없었고 오히려 늘 고마운... 내가 바쁜 시기일 때 많이 배려해 준 천사...🪽)

<br/>

**[최지원]** 이번 주차는 검색페이지에 추가적으로 무한 스크롤을 구현하는데 집중했습니다. useInfinteQuery의 구조를 먼저 이해하고 코드를 써봤지만 각 리턴값이 필수인지 아닌지, 필요하다면 어느 용도로 쓰이는지 등을 세세히 알아봐야했던 점에서 확신하고 코드를 쓰기까지 시간이 많이 걸렸습니다. 또 오픈 api를 요청하는 url에서 쿼리에 쓰이는 &와 ?의 의미를 오해하고 있어서 401, 404 등의 에러를 한참 마주하며 헤매었습니다.. ?는 존재할 수도, 안할수도 있음의 의미가 아닌 쿼리 스트링의 시작에 붙는 기호라는 점.. 그리고 쿼리들 간의 순서는 상관이 없다는 점..
useInfinteQuery를 이용한 데이터를 성공적으로 불러온 이후에는 페이지 하단에 도달했을 때 다음 페이지를 fetch 하도록 하는 과정에서 처음엔 react-infinite-scroller을 사용하려 했습니다. 하지만 loadMore에 넘겨주는 prop 부분에서 함수에 자꾸 page인자를 넘겨주어야 한다고 뜨는데, 그걸 쓸 부분이 없어서 에러를 해결하지 못했고, 관련하여 찾아본 공식 문서나 레퍼런스들이 조금 이전 자료인 점을 고려해 결국 useInview 훅을 활용하기로 했습니다. 이를 통해 isFetchingNextPage가 아니면서 hasNextPage가 존재할 때 로드를 트리거할 div 태그에 ref를 달아두고, 스크롤을 감지하는 inView에 따라 다음 페이지를 불러오는 방식으로 생각보다 간단하게 구현할 수 있었습니다. 저번 주차에는 초기 데이터를 불러오는 useEffect부분과 검색어 입력값이 발생했을 때 데이터를 불러오는 함수 구현 부분이 분리되어 있어서 무언가 비효율적이라는 생각이 들었는데, 이번 무한스크롤을 적용하면서 tanstack query의 비동기 함수 호출로써 한 번에 처리할 수 있게 되었다는 점에서 앞으로도 tanstack query를 더 알아보고 적극 이용해야겠다는 생각이 들었습니다. 또 key question을 작성하면서 알게 된 Intersection Observer API의 observer을 활용하는 방식도 어떻게 다를지 직접 활용해서 구현해보고 싶습니다.

<br/>

## 💡Key Questions

### 1️⃣ 무한 스크롤과 Intersection Observer API의 특징에 대해 알아봅시다.

무한 스크롤: 사용자가 페이지 하단에 도달했을 때 콘텐츠가 계속 로드되는 사용자 경험 방식, 한 페이지 아래로 스크롤 하면 끝없이 새로운 화면을 보여줌

Intersection Observer API: 브라우저 뷰포트(Viewport)와 원하는 요소(Element)의 **교차점**을 관찰하며, 요소가 뷰포트에 포함되는지 아닌지 (사용자 화면에 지금 보이는 요소인지 아닌지) 구별하는 기능을 제공함.

- 비동기적으로 실행되어 요소 관찰에서 발생하는 렌더링 성능이나 이벤트 연속 호출 문제가 생기지 않는다.
- `IntersectionObserverEntry` 의 속성을 활용하여 요소들의 위치를 파악하므로 리플로우 현상을 방지함
  - 리플로우 현상: 스크롤 이벤트에서 특정 지점을 관찰하기 위해 getBoundingClientRect() 함수를 사용할 때 브라우저가 웹 페이지의 일부 또는 전체를 다시 그려야하게 되는 경우
    1. offsetTop, offsetLeft, offsetWidth, offsetHeight
    2. scrollTop/Left/Width/Height
    3. clientTop/Left/Width/Height
    4. getComputedStyle(), or currentStyle in IE
       와 같은 정보를 요청할 때 (주로 스타일 정보)
- 사용법

  1. **intersection observer (관찰자) 생성**

  ```
  let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
  }

  let observer = new IntersectionObserver(callback, options);

  /* 설명 */
  - `threshold: 1.0` : 대상 요소가 root에 지정된 요소 내에서 100% 보여질 때 콜백이 호출될 것
  - `callback` : 타깃 element가 교차되었을 때 실행할 함수
  - `observer`: 콜백함수가 호출되는 IntersectionObserver
  ```

  2. **관찰 대상 요소 생성**

  ```
  let target = document.querySelector('#listItem');
  observer.observe(target);

  /* 설명 */
  - 대상에 지정된 임계값을 충족할 때마다 IntersectionObserver 콜백이 호출됨
  - callback은 ntersectionObserverEntry 객체 목록과 관찰자를 받음

  let callback = (entries, observer) => {
    entries.forEach(entry => {
      // Each entry describes an intersection change for one observed
      // target element:
    });
  };
  ```

### 2️⃣ tanstack query의 사용 이유(기존의 상태 관리 라이브러리와는 어떻게 다른지)와 사용 방법(reactJS와 nextJS에서)을 알아봅시다.

- Tanstack Query는 서버 상태 가져오기, 캐싱, 동기화 및 업데이트를 매우 쉽게 만듦.
- **전역 상태 관리 도구**는 애플리케이션의 상태를 관리하고 여러 컴포넌트 간 상태를 공유하기 위한 라이브러리로 Redux, Context API 등이 있다면, **React Query**는 데이터 요청 및 캐싱을 하기 위한 라이브러리이다. API 호출, 데이터 캐싱, 상태 관리 등의 작업을 담당함.
- Tanstack Query의 장점
  - Caching을 통해 앱의 속도 향상
  - 동일한 데이터에 대한 중복 요청을 제거함
  - 오래된 데이터의 상태를 파악해서 Updating을 지원함
  - Garbage Collection을 이용해 서버 쪽 데이터 메모리 관리함
  - React Hooks와 유사한 문법 인터페이스
- 사용법

  - `useQuery` (GET)

    ```
    const useGetItems = (id: string, options?: UseQueryOptions<Response>) => {
      return useQuery<Response>({
        queryKey: ['todos', surveyId],
        queryFn: () => get<Response>(`/v1/todos?todos-id=${id}`),
        ...options,
      });
    };

    export default useGetItems;

    // 객체 형식만 지원하는 v5
    const { isLoading: isAllDataLoading, data: allData } = useGetItems(id);
    ```

  - `useMutation` (POST, UPDATE, DELETE)

    ```
    const useCreateItem = (options?: UseMutationOptions<CreateItemResponse, unknown, CreateItemRequest>) => {
      return useMutation<CreateItemResponse, unknown, CreateItemRequest>({
        mutationFn: ({ todo_count, todo }) =>
          post<CreateItemResponse>('/v1/todos', { todo_count, todo }),
        ...options,
      });
    };

    export default useCreateItem;

    const { mutate: createItem } = useCreateItem();
    ```

  - 캐싱하는 방법
    - Query Key에 저장하여 Query key가 바뀔 때 새롭게 요청함

### 3️⃣ 기본적인 git add, commit, push, pull, merge, rebase 등의 명령어에 대해 알아봅시다(+ git branch 전략이나 다른 git 명령어도 좋습니다!)

- git add [디렉토리] / . : working directory에서 staging area로 올리기 (다음 변경(commit)을 기록할 때까지 변경분을 모아놓는 작업)
- git commit -m “commit message” : staging area에 저장된 변경 사항들을 로컬 저장소로 올리기
- git push : commit된 파일들을 원격 저장소로 업로드하기
- git merge : 브랜치를 병합하는 커밋 로그가 master(main)에 Head로 새로 추가되어 합치기
- git rebase : 브랜치를 베이스로 커밋을 재정렬하여 합치기

- Git Branch 전략
  - **필요한 이유?**
    - 협업 시 서로 개발 중인 기능이나 수정사항이 독립적이게 되어 영향을 주지 않고 동시 진행 가능
    - 각 브랜치가 특정 기능, 이슈에 대응하여 작업을 추적하고, 필요 시 작업 단위의 롤백이 가능하여 프로젝트 관리가 유연해짐
    - Release를 원하는 버전 단위로 관리할 수 있도록 하여 배포 안정성을 향상시킴
  - **Git Flow**
    - `master`: 제품 출시 버전을 관리하는 메인 브랜치
    - `develop`: 다음 출시 버전을 위해 개발하는 브랜치
    - `feature`: 새로운 기능을 개발하는 브랜치
    - `release`: 다음 출시 버전을 준비하는 브랜치
    - `hotfix`: 출시된 제품의 버그를 고치기 위한 브랜치
    - feature에서 작업이 완료된 것은 develop 브랜치로 병합됨. 다음 출시 버전이 있을 경우 release 브랜치를 따서 버그 해결 등을 거쳐 배포를 준비함. 이후 master 브랜치로 머지하여 제품 출시.
    - 전통적인 방식
  - **GitHub Flow**
    - 하나의 base 브랜치 (master) + master에 기능을 추가하기 위한 브랜치 (feature) 두 가지로 운영하는 간단한 방식
    - 빠른 수정과 배포, 단순하고 지속적인 배포에 유리함

<br/>
<hr>

<details>
<summary><H2>5주차 README</H2></summary>
<div markdown="1">
  
### 🩵 느낀 점

**[송유선]** 협업으로 진행하는 첫 스터디 과제라 우여곡절이 많았던 것 같다. 초기 세팅을 맞출 때부터 오류가 많이 나서 당황했지만, 같이 극복하는 과정에서 배운 것도 많았다. (public 폴더의 위치에 따른 경로 설정부터, next.js 의 파일 구조까지...) 이번에 Next.js, Tailwind.css, OpenAPI 등 처음 써 보는 게 너무 많아서 더 애를 먹었던 것 같다. 효율적인 코드를 작성하고 싶었는데 맞게 작성하고 있는지 확신할 수가 없어서 답답했다.. 나는 main과 detail 페이지를 작업했는데, 고민을 했던 부분 중 하나는 메인홈에서 혼합되어 있는 컨텐츠들의 상세 페이지를 어떻게 라우팅할지였다. 종류가 movie랑 tv로 섞여 있는데 getContents에서 불러오는 정보에는 영화인지 티비 프로그램인지 알려주는 부분이 없었지만 detail 정보를 요청하기 위해서는 id 앞에 종류를 써야 했다. 그래서 아예 상세 페이지를 라우팅할 때 미리 정의한 media_type을 (`const media_type = category.includes('/tv') ? 'tv' : 'movie';`) id와 함께 주소에 넣고 넘긴 뒤 params로 작업했는데... 버셀에서 배포할 때 오류가 났다..^^ 로컬에선 아무 문제 없었는데, 배포 시에는 더 엄격한 타입 검증을 해서 그런 것 같다. params 말고 props 각각 타입 지정해보기도 하고 여러 방법을 써 봤는데 아직 만족스럽게 해결하지 못 했다... (결국 eslintrc 에 any 쓸 수 있도록 규칙 추가함...) 이 부분은 다음 주에 가능하면 좀 더 괜찮은 방향으로 수정해보고 싶다. 추가로, 이번에는 스켈레톤이나 로딩 중에 보여줄 화면을 따로 만들지 못했는데 다음 주에 간단하게라도 추가해보고 싶다.
<br/><br/>
**[최지원]** Next를 처음 써보아서 초반에는 리액트와 가장 크게 다른 부분인 라우팅 방식, 서버 컴포넌트의 활용에 대해 알아본 후 시작했었습니다. 초기 세팅을 잘 해두어야 뒤에 가서 번거로움을 줄일 수 있다는 깨달음을 그 어떤 때보다 실감했고, 이번 협업에서 저는 초기 세팅, 랜딩 페이지, 검색 페이지를 담당했습니다. api key를 노출시키지 않기 위한 방법으로는 `next.config.ts` 에 가짜 경로를 지정해주는 방식을 적용하였는데, api 호출 함수쪽에서 해당 가짜 경로의 앞부분에 불필요한 domain을 붙여두거나 query 앞에 &와 ? 를 혼동하는 등 사소한 실수들과 결합되어 원하는 요청이 안 되는데서 조금 헤맸었습니다 .. 그리고 무엇보다 `“use client”`를 쓰지 않기 위한 서버 컴포넌트를 짜는 것에서 큰 어려움을 느꼈습니다. 실시간 검색이다 보니 useEffect는 필요한데, 해당 Search 컴포넌트는 서버 컴포넌트로 쓰고 싶어서 결국 useEffect를 포함하는 하위 클라이언트 컴포넌트로 분리하였고, 또다시 따로 분리한 Input 컴포넌트는 memo로 감싸주었습니다. 또 검색어 입력에서 입력값 변경에 따라 함수를 호출하기 때문에 한 자씩 입력될 때마다 불필요하게 리렌더링 되는 것을 막기 위해 `useDebouncedCallback`으로 감싸 0.3초의 지연을 주는 디바운싱을 적용했고, 처음에는 해당 처리를 하고 나니 또 초기 데이터가 뜨지 않는 문제가 발생하여 useEffect를 초기에만 한 번 불러오는 용도로 적용하였습니다. 무한 스크롤은 다음 주차에 적용해보고자 하고, 추가로 key question을 작성하면서 더 알게 된 최적화 방식을 적용해보고 싶습니다. 알아볼수록 지금까지 써온 React는 정말 좁은 범주였음을 느끼며.. 더욱 공부해야 할 게 많다고 느낀 한 주였습니다.<br/>
+) 프로젝트 본격 개발에 앞서 유선언니와 미리 협업을 경험해 볼 수 있어 좋았습니다. 대면으로 만나서 진행하니 빠르고 유연한 소통이 가능했고, 서로 의견을 활발히 주고 받아서 더 시너지를 낼 수 있었던 것 같습니다.
<br/>

## 💡Key Questions

### 1️⃣ React 18 버전의 변경점에 대해 설명해주세요.(+ 19 버전에 대한 추가 설명도 좋습니다)

**1. Server component (RSC) & Client component (RCC)**

기존 리액트 컴포넌트의 비동기적 data fetching은 client-server waterfall을 야기한다는 문제점이 있다. 부모 컴포넌트는 렌더링 후 필요한 데이터를 받아오기 시작하고 이 과정이 끝나기 전까지 자식 컴포넌트의 렌더링과 API 호출이 지연되며 불필요한 렌더링이 발생하기 때문이다.

이를 위해 등장한 서버 컴포넌트는 서버에서 Render을 수행하기 때문에 API를 통한 데이터 요청의 latency를 줄이고, 클라이언트에서 연속된 API 호출을 제거하여 client-server waterfall을 막는다.

**RSC의 장점**

- 자유로운 서버 리소스 접근
- 제로 번들 사이즈 컴포넌트
- 자동 코드 분할

참고: https://tech.kakaopay.com/post/react-server-components/#%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%84%9C%EB%B2%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8rsc%EC%99%80-%EC%84%9C%EB%B2%84-%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81ssr

**2. Automatic batching**

상태 업데이트(setState)를 하나로 통합해서 배치 처리를 한 후 단일 리렌더링으로 처리함으로써 리렌더링 성능을 개선한다.

17v : 이벤트 핸들러 내부 자체에서만 상태 업데이트가 여러 번 발생할 경우 배치처리를 하여 한 번만 렌더링한다. 그 안에서 fetch()와 같이 콜백을 받아 처리하는 메소드가 있는 경우 적용되지 않는다. 따라서 state 수가 많아질수록 불필요한 리렌더링도 많이 발생한다.

18v : 이벤트 핸들러 내부에서 fetch() 함수를 활용해도 배치처리가 적용되어 핸들러 1번 작동마다 리렌더링이 1번 발생한다. but 아래와 같은 혼용 상태에서는 적용되지 않는다.

```tsx
const onClickCreateNumber = () => {
  // 핸들러 내부에서 상태 업데이트 (콜스택)
  setNumber((prev) => prev + 1);

  // fetch() 콜백함수 내부에서 상태 업데이트 (태스트 큐)
  fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
    setBoolean((prev) => !prev);
  });
};
```

**3. Concurrent Feature**

동시성 모드란 여러 작업을 동시에 처리하도록 우선순위를 나눠 작업 간 빠른 전환으로 동시에 수행되는 것처럼 하는 처리이다. js는 싱글 스레드 기반 언어이므로 작업을 실제로 동시에 처리하지는 않는다. 사용자 경험을 개선하는데 중요하다.

- **Suspense**

  사용자에게 보여주고 싶은 컴포넌트를 먼저 렌더링할 수 있게 하는 기능이다. 초기 렌더링 페이지를 전체가 아닌 빠르게 준비된 부분부터 보여주어 초기 렌더링 속도가 감소한다.

  ```tsx
  <Suspense fallback={<Spinner />}>
    <Comments />
  </Suspense>
  ```

  Suspense로 렌더링을 원하는 컴포넌트를 감싸면 해당 컴포넌트 렌더링이 완료되기 전까지 fallback 내부의 컴포넌트를 사용자에게 보여준다. SSR환경에서 가장 잘 작동한다.

- createRoot
  위의 배치처리와 동시성 모드는 render() 대신 쓰이는 createRoot API를 통해 지원된다. 아래와 같이 쓰인다.

  ```tsx
  // React-18v
  import React from 'react';
  import App from './App';

  import { createRoot } from 'react-dom/client';
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<App />);
  ```

- **Transition**
  기존의 디바운스, 쓰로틀링, setTimeout은 특정 시간을 반드시 기다려야 했으나 이를 사용하지 않고 `useTransition` 훅을 통해 `isPending` 상태값을 가져와 렌더링 결과를 분기 처리한다.
  `isPending`: state 변경 직후에도 UI를 리렌더링 하지 않고 잠시 유지하는 상태
  `startTransition` : 우선순위가 높은 상태 업데이트가 발생하면 내부에 선언한 상태 업데이트는 중단되고 클릭이나 키 입력이 끝난 후 이후에 해당 상태 업데이트가 발생한다.
  ```tsx
  const [isPending, startTransition] = useTransition({ timeoutMs: 5000 });
  ```

**4. New Hooks**

- `useId()`
  - 난수 ID를 생성하는 Hook
  - 클라이언트와 서버간의 hydration의 불일치를 피하면서 유니크 아이디를 생성하지만 key는 아니다.
  ```tsx
  function CreateId() {
    const id = useId();
    return <input id={id} type="text" />;
  }
  ```
- `useDeferredValue()`
  - 트리에서 급하지 않은 부분의 재랜더링을 지연할 수 있는 기능을 지원
  - 디바운스와 비슷하지만 고정된 지연시간이 없고 렌더링이 반영되는 시점에 지연 렌더링을 시도합니다.
    - But 주의할 점은 https://11001.tistory.com/250

### 2️⃣ nextJS 13 이후의 app routing 방식의 특징과 기능에 대해 설명해주세요.

Next.js 13 버전은 기존의 페이지 라우팅 방식에서 벗어나 새로운 App Routing 방식을 도입하여 개발자 경험과 성능을 향상시켰다. 우선 첫째로, 디렉터리를 구성하는 방식에 변화가 생겼다.

13 이전 버전에서는 pages 디렉터리를 중심으로 라우팅이 이루어졌다. pages 디렉터리 내부에 파일이나 디렉터리를 생성하면 해당 경로가 자동으로 라우팅되었다. (pages/main.js 파일을 생성하면 /main 경로로 접근하는 방식) 그러나 13에서는 새로운 app 디렉터리를 도입하여 해당 방식을 개선하였다. 우선 각 디렉터리 내에 layout.js 파일을 생성하여 해당 경로의 공통 레이아웃을 정의할 수 있고, loading.js와 error.js 파일을 통해 로딩 상태와 에러 처리를 디렉터리별로 관리할 수 있으며, 파일 상단에 'use client'; 지시어를 사용하여 클라이언트 컴포넌트를 정의할 수도 있다.

Next.js 13에서는 기본적으로 서버 컴포넌트(서버에서 렌더링되며, 비동기 함수로 정의 가능)를 사용하며, 필요에 따라 클라이언트 컴포넌트('use client'; 지시어를 사용하여 정의하며, 브라우저에서 실행됨)를 정의한다. 서버 컴포넌트에서는 데이터베이스 접근, API 호출 등 서버 측 로직을 직접 구현할 수 있다. 이를 통해 서버리스 함수를 작성할 수 있으며, 별도의 백엔드 서버 없이도 백엔드 로직을 구현할 수 있다.

또한, 패러랠 라우트(동일한 레벨에서 여러 경로를 동시에 렌더링할 수 있도록 하는 기능)와 인터셉팅 라우트(기존의 네비게이션 흐름을 가로채어 다른 UI를 렌더링할 수 있게 함)도 구현 가능하다. 각각 [[]]나 (())를 사용하여 라우트를 정의하면 된다.

SSR은 서버 사이드 렌더링으로, 요청 시점에 서버에서 HTML을 생성하여 클라이언트에게 전달하는 방식이다. Next.js에서는 기본적으로 페이지 컴포넌트를 비동기 함수로 정의하고, 내부에서 데이터를 패칭하여 SSR을 구현한다. SSG는 빌드 시점에 HTML을 생성하여 CDN에 배포하는 방식으로, 빠른 응답 속도와 캐싱에 유리하다는 장범이 있다. Next.js에서 이걸 구현하려면 getStaticProps나 generateStaticParams를 사용하면 된다.

### 3️⃣ vercel, netlify 같은 호스팅 플랫폼의 특징과 내부 구현 원리에 대해 설명해주세요(+ aws의 스토리지와 인스턴스 등 생태계에 대해서도 알려주세요)

**1) Vercel**

Next.js의 개발사로, CI/CD 파이프라인을 자동화하여 Git에서 커밋이 발생할 때마다 변경된 내용을 자동으로 빌드하고 배포한다.

1. **서버리스 기능**: 클라이언트 요청에 따라 서버리스 함수가 트리거된다. 이 함수는 AWS Lambda 같은 서버리스 플랫폼을 기반으로, 필요할 때마다 인스턴스를 생성하여 실행하고, 처리가 끝나면 인스턴스를 제거한다.
2. **캐싱과 엣지 네트워크**: 전 세계에 분산된 CDN을 통해 정적 콘텐츠를 캐싱하여 빠르게 제공하고, 데이터베이스나 API 호출이 필요한 경우에는 엣지 네트워크를 사용해 지연 시간을 최소화한다.

**2) Netlify**

Jamstack(Javascript, API, Markup) 구조의 프로젝트에 최적화되어 있으며, 정적 웹사이트 생성과 CDN 배포를 기본으로 합니다.

1. **CI/CD 파이프라인**: Git 저장소에 변경이 발생하면 자동으로 빌드와 배포를 수행하고, 사용자 정의 가능한 빌드 스크립트를 통해 애플리케이션의 복잡한 빌드 과정을 유연하게 설정할 수 있다.
2. **서버리스 함수 지원**: Netlify Functions라는 서버리스 기능을 통해, 요청이 발생할 때만 함수를 실행하는 방식으로 리소스를 절약한다.
3. **내부 CDN 및 엣지 네트워크**: 전 세계 CDN 네트워크를 통해 정적 자산을 빠르게 제공, 특정 페이지나 API 호출을 위한 엣지 네트워크 최적화로 성능을 높인다.

**3) AWS 생태계**

1. **AWS 스토리지**: 안정적이고 확장성 높은 오브젝트 스토리지 서비스. 정적 웹사이트 호스팅, 백업, 데이터 아카이빙 등에 많이 사용된다. 정적 파일을 S3에 업로드하고 CloudFront CDN과 연계하면 빠른 콘텐츠 전송이 가능하다.
2. **EC2 인스턴스**: 가상 서버 인스턴스. 운영 체제와 소프트웨어를 설치하여 애플리케이션을 호스팅할 수 있고 서버를 확장하거나 줄일 수 있습니다.
3. **AWS Lambda (서버리스 컴퓨팅)**: Vercel과 Netlify의 서버리스 함수와 유사하게 특정 이벤트에 따라 함수가 실행된다.
4. **데이터베이스와 API 서비스**: RDS나 DynamoDB 등의 데이터베이스를 제공하고 API Gateway를 통해 서버리스 API를 통해 유연한 아키텍처 구성이 가능하다.

</div>
</details>
<br/>
