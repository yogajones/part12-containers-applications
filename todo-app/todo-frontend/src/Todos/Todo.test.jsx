import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

describe('Todo Component', () => {
    it('renders Todo component and checks buttons', () => {
      const todo = { text: 'Test Todo', done: false };
      const onClickDelete = vi.fn()
      const onClickComplete = vi.fn()
      const user = userEvent.setup()
  
      render(<Todo todo={todo} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />)
  
      expect(screen.getByText('Test Todo')).toBeInTheDocument()
      expect(screen.getByText('This todo is not done')).toBeInTheDocument()
  
      user.click(screen.getByText('Set as done'))
      expect(onClickComplete).toHaveBeenCalledWith(todo)

      user.click(screen.getByText('Delete'))
      expect(onClickDelete).toHaveBeenCalledWith(todo)

    });
  });