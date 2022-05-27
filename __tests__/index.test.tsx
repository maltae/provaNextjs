import { render, screen } from '@testing-library/react'
import Index from '../pages/index';

describe('Home', () => {
  test('renders learn react link', () => {
    render(<Index/>);
    const linkElement = screen.getByText(/welcome to BLABLABLA!/i);
    expect(linkElement).toBeInTheDocument();
  });
})