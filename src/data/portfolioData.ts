import { InterestArea, ActivityExperience, ResearchProject } from '../types';

export const PROFILE_DATA = {
  name: '홍길동',
  major: '의공학전공',
  grade: '4학년',
  fullTitle: '홍길동 / 의공학전공 4학년',
  heroTitle: '생체신호와 물리모델로, 의료 AI의 가능성을 탐구합니다.',
  introSentence:
    '의공학전공 4학년 홍길동입니다. 생체신호의 표현학습과 물리 기반 모델링을 연결하며, 재현 가능한 실험으로 연구 질문을 검증합니다.',
  detailedIntro: [
    '의공학 지식과 머신러닝 방법론을 바탕으로, 실제 임상 및 의료 환경에서 제기되는 불확실성을 다루는 데 관심을 두고 있습니다.',
    '모델의 겉보기 수치보다 데이터 수집 조건, 대상자 분할, 물리적 법칙과의 정합성을 엄격하게 점검하는 실험 설계를 지향합니다.',
    '단순한 구조적 확장에 의존하기보다 명확한 연구 질문을 세우고, 조건별 비교 실험을 통해 얻은 한계와 통찰을 정직하게 기록합니다.'
  ]
};

export const INTEREST_AREAS: InterestArea[] = [
  {
    id: 'bio-signal-ai',
    index: '01',
    title: '생체신호 AI',
    description:
      '심전도에서 의미 있는 표현을 학습하고, 적은 라벨과 새로운 데이터 조건에서도 활용할 수 있는 모델을 연구합니다.'
  },
  {
    id: 'physics-informed-modeling',
    index: '02',
    title: '물리 기반 의료 모델링',
    description:
      '물리 방정식과 관측 데이터를 함께 활용해 혈류와 같은 생체 현상을 모델링하는 방법에 관심이 있습니다.'
  },
  {
    id: 'trustworthy-ai',
    index: '03',
    title: '신뢰할 수 있는 AI',
    description:
      '데이터 분할, 외부 검증, 불확실성 분석을 통해 모델의 성능과 한계를 함께 살펴봅니다.'
  }
];

export const ACTIVITIES: ActivityExperience[] = [
  {
    id: 'medical-ai-project',
    index: '01',
    title: '의료 AI 연구 프로젝트',
    role: '실험 설계 및 모델링 리드',
    description:
      '연구 질문을 비교 실험으로 구체화하고, 데이터 전처리부터 학습·평가까지 이어지는 실험 파이프라인을 구성했습니다.'
  },
  {
    id: 'biomedical-study',
    index: '02',
    title: '의공학 논문 재현 스터디',
    role: '스터디 운영 및 재현 실험 담당',
    description:
      '생체신호 AI와 물리정보신경망 논문의 가정·실험 조건을 정리하고, 재현 과정과 실패 사례를 공유했습니다.'
  }
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: 'ecg-ssl',
    title: '자기지도학습 기반 ECG 표현학습',
    shortDescription: '라벨이 제한된 조건에서 심전도 표현의 전이 가능성 탐구',
    category: '생체신호 AI',
    researchQuestion:
      '라벨이 적거나 데이터의 수집 조건이 달라져도 활용할 수 있는 심전도 표현을 어떻게 학습할 수 있을까?',
    role: '데이터 파이프라인, Transformer 인코더 구성, 사전학습 및 비교 실험 설계를 담당했습니다.',
    methodology:
      '신호 일부를 가리는 마스킹과 서로 다른 변형의 표현을 비교하는 대조학습을 조합했습니다. 사전학습한 표현을 후속 과제에 적용하는 실험을 구성했습니다.',
    verification:
      '동일 대상자의 신호가 학습·평가에 섞이지 않도록 분할 기준을 정했습니다. 지도학습 기준 모델과 비교하고, 마스킹·대조학습 요소를 각각 제거하는 비교 실험, 라벨 비율별 평가, 별도 데이터에서의 외부 검증을 구성했습니다.',
    deliverables: [
      '재현 가능한 학습 코드',
      '실험 설정표',
      '모델 카드',
      '결과 분석 보고서'
    ],
    learningsAndLimitations:
      '모델 구조만큼 데이터 분할과 검증 조건이 결과 해석에 중요하며, 한 데이터에서의 성능을 다른 환경에 그대로 일반화할 수 없다는 점을 정리했습니다.'
  },
  {
    id: 'pinn-blood-flow',
    title: 'PINN 기반 혈류 모델링',
    shortDescription: '희소한 관측과 물리 제약을 결합한 유동장 추정',
    category: '물리 기반 의료 모델링',
    researchQuestion:
      '제한된 관측 데이터와 물리 제약을 함께 사용하면, 관측하지 않은 위치의 유동 정보를 어느 조건에서 추정할 수 있을까?',
    role: '모델 구성, 물리 제약을 반영한 손실함수 설계, 실험 자동화와 결과 시각화를 담당했습니다.',
    methodology:
      '단순화한 혈관 형상과 시뮬레이션 데이터를 사용해 유동장을 학습했습니다. 관측 데이터에 대한 오차와 물리 방정식을 만족시키기 위한 항을 함께 사용했습니다.',
    verification:
      '기준 시뮬레이션과 결과를 비교했습니다. 관측 지점 수, 데이터 잡음, 경계조건을 바꾸어 오차와 수렴 과정을 살펴보고, 물리 제약이 없는 모델과도 비교했습니다.',
    deliverables: [
      '실험 노트북',
      '유동장 비교 시각화',
      '조건별 오차 분석표',
      '모델의 적용 범위와 한계를 정리한 보고서'
    ],
    learningsAndLimitations:
      '물리 제약을 추가하는 것만으로 정확성이 보장되지는 않으며, 관측 조건과 경계조건에 따른 한계를 함께 확인해야 한다는 점을 정리했습니다.'
  }
];
