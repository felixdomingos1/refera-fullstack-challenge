/**
 * @jest-environment jsdom
 */
import { render } from '../../utils/tests/wrapper'
import { Header } from '.'

describe('Header Component', () => {
  it('renders correctly', () => {
    const { container, getByRole } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()

    expect(getByRole('button')).toHaveTextContent('New Order')
  })
})
