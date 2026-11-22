// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const phases = [
  ['Phase 0 · 엔지니어링 기초', 'phase-0'],
  ['Phase 1 · 싱글 에이전트', 'phase-1'],
  ['Phase 2 · 멀티 에이전트 & 프로토콜', 'phase-2'],
  ['Phase 3 · 컨텍스트 & 메모리', 'phase-3'],
  ['Phase 4 · 평가와 관측', 'phase-4'],
  ['Phase 5 · 보안과 가드레일', 'phase-5'],
  ['Phase 6 · 프로덕션 & 최적화', 'phase-6'],
  ['Phase 7 · 포트폴리오 & 취업', 'phase-7'],
];

export default defineConfig({
  site: 'https://seongholim-11.github.io',
  base: '/ai-agent-course',
  integrations: [
    starlight({
      title: 'AI Agent 엔지니어 코스',
      description: '24주 만에 AI 에이전트를 설계·평가·배포하는 엔지니어가 되는 개인 강의 사이트',
      defaultLocale: 'root',
      locales: { root: { label: '한국어', lang: 'ko' } },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/seongholim-11/ai-agent-course' }],
      customCss: ['./src/styles/custom.css'],
      lastUpdated: false,
      sidebar: [
        {
          label: '시작하기',
          items: [
            { label: '진도 대시보드', link: '/dashboard/' },
            { label: '코스 사용법', slug: 'guide/how-to-use' },
            { label: '개발 환경 세팅', slug: 'guide/setup' },
          ],
        },
        ...phases.map(([label, dir]) => ({ label, collapsed: dir !== 'phase-0', items: [{ autogenerate: { directory: dir } }] })),
        {
          label: '포트폴리오 프로젝트',
          collapsed: true,
          items: [{ autogenerate: { directory: 'projects' } }],
        },
        {
          label: '면접 대비',
          collapsed: true,
          items: [{ autogenerate: { directory: 'interview' } }],
        },
        {
          label: '부록',
          collapsed: true,
          items: [
            { label: '용어집', slug: 'appendix/glossary' },
            { label: '리소스 & 출처', slug: 'appendix/resources' },
          ],
        },
      ],
    }),
  ],
});
