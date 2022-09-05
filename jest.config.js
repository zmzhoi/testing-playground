module.exports = {
  preset: 'ts-jest', // jest에서 typescript loader 역할을 함. => ts-jest가 esm 모듈 구문을 cjs 모듈 구문으로 변환한다.
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setupTest.ts'],
  globals: {
    'ts-jest': {
      isolatedModules: true, // 타입 체크+트랜스파일링을 하는 타입스크립트의 느린 성능으로, 테스트 속도가 저하 => 이를 해소하는 방법
    },
  },
  testPathIgnorePatterns: ['promise.test.ts'],
};
