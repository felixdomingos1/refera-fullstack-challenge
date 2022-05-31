/**
 * @jest-environment jsdom
 */
import { render } from '../../utils/tests/wrapper'
import { NewOrderModal } from '.'

describe('NewOrderModal Component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<NewOrderModal />)
    expect(container.firstChild).toMatchSnapshot()

    expect(getByText('New Order')).toBeInTheDocument()
  })
})
