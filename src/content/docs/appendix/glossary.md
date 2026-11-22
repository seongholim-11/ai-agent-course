---
title: 용어집
description: AI 에이전트 엔지니어링 핵심 용어 정리
---

| 용어 | 설명 | 주차 |
| --- | --- | --- |
| A2A (Agent2Agent) | 독립적인 에이전트끼리 Agent Card, Task, Artifact로 작업을 주고받는 프로토콜 | 10 |
| Agent Card | A2A 에이전트의 이름·능력(skills)·엔드포인트·인증 방식을 담은 공개 문서 | 10 |
| Agentic RAG | 검색을 도구로 주고 모델이 검색 여부·질의·재검색을 결정하게 하는 RAG | 6 |
| BM25 | 단어 빈도 기반 키워드 검색 점수. 하이브리드 검색의 한 축 | 6 |
| Cascade | 작은 모델로 먼저 시도하고 검증 실패 시 큰 모델로 재시도하는 방식 | 19 |
| Checkpointer | 그래프 실행 상태를 단계마다 저장해 재개·되돌리기를 가능하게 하는 계층 | 7 |
| CodeAct | 모델이 도구 호출을 코드로 작성해 한 번에 실행하는 방식 | 8 |
| Compaction | 컨텍스트가 한도에 가까워지면 지금까지의 내용을 요약해 이어가는 기법 | 11 |
| Context engineering | 매 턴 모델이 보는 전체 입력을 구성·관리하는 일 | 11 |
| Context rot | 입력이 길어질수록 같은 과제의 정확도가 떨어지는 현상 | 11 |
| Continuous batching | 토큰 단위로 끝난 요청을 빼고 새 요청을 넣어 GPU 사용률을 높이는 서빙 기법 | 20 |
| Contextual Retrieval | 각 청크에 문서 맥락 설명을 붙여 임베딩해 검색률을 높이는 기법 | 6 |
| Deep Agent | 계획 도구, 파일시스템, 서브에이전트, 상세 프롬프트로 긴 작업을 수행하는 에이전트 구조 | 12 |
| Durable execution | 중단 지점과 무관하게 완료된 단계의 결과를 재사용해 이어 실행하는 실행 모델 | 21 |
| Elicitation | MCP 서버가 클라이언트를 통해 사용자에게 추가 정보를 요청하는 기능 | 9 |
| Evaluator–Optimizer | 생성자와 평가자가 피드백 루프를 도는 패턴 | 5 |
| Handoff | 대화·작업의 통제권을 다른 에이전트에게 넘기는 패턴 | 8 |
| Harness | 루프, 도구, 컨텍스트 관리, 권한, 검증 등 모델 바깥의 에이전트 실행 시스템 전체 | 12 |
| HITL (Human-in-the-loop) | 위험하거나 불확실한 단계에서 사람의 승인·입력을 받는 설계 | 7, 18 |
| HyDE | 가상의 답을 먼저 생성해 그것으로 검색하는 질의 변환 기법 | 6 |
| Idempotency (멱등성) | 같은 작업을 여러 번 실행해도 결과가 한 번 실행한 것과 같은 성질 | 2, 21 |
| Interrupt | LangGraph에서 실행을 멈추고 외부 입력을 기다렸다가 재개하는 기능 | 7 |
| KV cache | 생성 중 이전 토큰의 Key·Value를 저장해 재계산을 피하는 캐시 | 20 |
| Lethal trifecta | 비공개 데이터 접근, 신뢰할 수 없는 콘텐츠, 외부 전송 수단이 한 에이전트에 모인 위험한 조합 | 17 |
| LLM-as-judge | LLM으로 다른 LLM의 출력을 루브릭에 따라 채점하는 평가 방식 | 14 |
| MCP (Model Context Protocol) | AI 앱과 외부 도구·데이터를 연결하는 오픈 프로토콜 | 9 |
| MoA (Mixture of Agents) | 여러 모델의 답을 집계 모델이 종합하는 방식 | 8 |
| Orchestrator–Worker | 중앙 에이전트가 하위 작업을 동적으로 나눠 위임하고 종합하는 패턴 | 8 |
| PagedAttention | KV 캐시를 블록 단위로 관리해 메모리 낭비를 줄이는 vLLM의 핵심 기법 | 20 |
| pass@k / pass^k | k번 중 한 번 이상 성공할 확률 / k번 모두 성공할 확률 | 14 |
| Progressive disclosure | 이름·설명만 먼저 보여주고 필요할 때 본문을 로드하는 Skills의 방식 | 12 |
| Prompt caching | 동일한 입력 접두사를 재사용해 비용·지연을 줄이는 공급자 기능 | 3, 19 |
| Prompt injection | 입력 속 지시로 모델이 의도하지 않은 행동을 하게 만드는 공격 | 17 |
| ReAct | 생각–행동–관찰을 반복하는 에이전트 패턴 | 5 |
| Reducer | 그래프 상태의 특정 키에 대해 업데이트를 병합하는 규칙 | 7 |
| Reranker | 질문과 문서를 함께 읽어 관련도를 다시 매기는 모델(cross-encoder) | 6 |
| RRF | 여러 검색 결과의 순위를 역수 합으로 결합하는 방법 | 6 |
| Sampling (MCP) | MCP 서버가 클라이언트의 LLM에게 생성을 요청하는 기능 | 9 |
| Skill | 작업 수행 절차·스크립트·템플릿을 담은 폴더 단위 확장 | 12 |
| Streamable HTTP | MCP의 원격 전송 방식 | 9 |
| Structured output | 출력을 JSON Schema 등 정해진 구조로 받는 기능 | 4 |
| Subagent | 독립 컨텍스트에서 하위 작업을 수행하고 압축된 결과를 돌려주는 에이전트 | 8, 11 |
| Tool poisoning | 도구 설명에 악성 지시를 숨기는 공격 | 9, 17 |
| TTFT / TPOT | 첫 토큰까지의 시간 / 출력 토큰 하나당 시간 | 3, 20 |
| Trajectory evaluation | 최종 결과뿐 아니라 도구 호출 과정까지 평가하는 방식 | 14 |
