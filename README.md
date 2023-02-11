# GAMBLE

> 저는 디자인에 소질이 없습니다.... 코드를 중심으로 봐주세요 !!

<h2>전생의 나는 어떤 동물이었을까요 ?</h2>
<br>
랜덤하게 생성된 요소 3가지에 대하여 gambling을 통해 전생의 동물을 확인할 수 있습니다

<br>

로스트 아크 강화 시스템인 돌 깎기에서 착안하여 생성한 프로젝트 입니다

<hr><br>

프로젝트를 처음 실행시키신다면 `npm run init`을 통해 프로젝트를 쉽게 확인하실 수 있습니다<br>
`npm run start`를 통해 프로젝트를 확인하실 수 있습니다<br>
`npm run storybook`을 통해 스토리북을 시작할 수 있습니다<br>
`npm run test`를 통해 단위 테스트를 진행할 수 있습니다<br>
`npm run e2e`를 통해 cypress를 이용한 프로젝트 통합 테스트를 진행할 수 있습니다

## TechStack

<div>
  <img src="https://user-images.githubusercontent.com/82315118/209645740-10b5a4b9-adae-4b31-99f4-d0044815874f.png" width="40" height="40" />
  <img src="https://user-images.githubusercontent.com/82315118/209647084-c525618b-9083-42bb-87a0-a68bcd06481d.png" width="40" height="40" />
  <img src="https://user-images.githubusercontent.com/82315118/209645824-053823d7-d2c9-4826-8c57-c11f9ccab1d9.png" width="40" height="40" />
  <img src="https://user-images.githubusercontent.com/82315118/212472213-cdef876a-2a1c-45a0-bbf6-0711a41b7f9d.jpg" width="40" height="40" />
  <img src="https://user-images.githubusercontent.com/82315118/209647244-6a64e70c-e2f9-4a4e-a291-cbb781627519.png" width="40" height="40" />
  <img src="https://user-images.githubusercontent.com/82315118/209647209-f2931ed3-b736-4cb1-b525-65347e2b6e14.png" width="40" height="40" />
  <img src="https://user-images.githubusercontent.com/82315118/209647166-a36b57b5-61dc-4e08-8406-b8764eb9d940.png" width="40" height="40" />
</div>

<br>

<details>
  <summary>
    <h3>convention</h3>
  </summary>
    <h3>commit message</h3>
      
          Gitmoji를 사용하였습니다

          📦️ 패키지 설정
          ✨ 신규 기능
          ✅ 테스트 코드
          ♻️ 리팩터링
          📝 문서 작성
          🎨 스타일링
          🐛 오류 수정

<hr>

<h3>
  branch
</h3>

```
  label / author / main
```

ex) `feat` / `wj` / `set-up-project`

<hr>

<h3>
  interface & model
</h3>

```
`~Schema` : API response 모델

`~Props` : 컴포넌트 인터페이스

`~Type` : client-side 데이터 모델

상수: UPPER_CASE
컴포넌트, 타입: PascalCase
ETC: camelCase
```

<hr>

<h3>
  test
</h3>

```
describe('[domain] testFn', () => {
    it('expect Message', () => {})
});
```

</details>
