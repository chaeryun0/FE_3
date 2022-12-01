import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// 자스민에서 describe 역할: 테스트들의 집합 (첫번째 인자: 테스트에 대한 설명, 두번째 인자: 테스트를 실행할 함수 )
test('버튼이 제대로 동작하고 있습니까?', () => {
  render(<App />); // App.js에서 import하고 있는데,
  // 리액트를 실행하고 있지 않지만, 리액트를 실행하는 것처럼 구현하고 있는것, 가상돔 생성

  // reder 함수로 그려주고 screen으로 접근
  // screen은 생성된 가상돔에 접근하기 위한 전역 객체
  // button의 역할을 하는 요소를 검색하며, 요소안의 텍스트는 'change to blue!'여야 함
  const button = screen.getByRole('button', { name: 'change to blue!' });

  // button 요소의 배경색이 red 이길 기대함
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button.textContent).toBe('change to red!');
});
