# AI Agent 엔지니어 코스

24주 동안 AI 에이전트를 설계·평가·보호·배포하는 엔지니어가 되기 위한 개인 강의 사이트입니다.

- 사이트: https://seongholim-11.github.io/ai-agent-course/
- 구성: 주차별 개념·심화·실습 과제·면접 질문, 완료 체크리스트와 회고 메모(브라우저 저장), 진도 대시보드, 포트폴리오 프로젝트, 면접 질문 은행
- 뼈대: 패스트캠퍼스 「AI Agent 바이블」 커리큘럼 + 2026년 채용 시장 요구 역량 보강

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321/ai-agent-course/
npm run build
```

## 구조

- `src/content/docs/` 강의 콘텐츠 (MDX)
- `src/data/course.ts` 주차·체크리스트 정의 (대시보드와 체크리스트의 단일 출처)
- `src/components/` 체크리스트, 메모, 대시보드
- `.github/workflows/deploy.yml` main에 push하면 GitHub Pages로 자동 배포

Astro Starlight로 만들었습니다.
