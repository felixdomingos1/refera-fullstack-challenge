/**
 * @jest-environment jsdom
 */
import { render, within } from '../../utils/tests/wrapper'
import { OrdersTable } from '.'
import { OrdersTableProps } from './types'

const OrdersTableMock = (values: OrdersTableProps[]) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Agency</th>
        <th>Category</th>
        <th>Company</th>
        <th>Deadline</th>
        <th>Description</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {values?.map(
        ({
          id,
          name,
          agency,
          category,
          company,
          deadline,
          description,
          phone
        }: OrdersTableProps) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{agency}</td>
            <td>{category.name}</td>
            <td>{company}</td>d<td>{String(deadline)}</td>
            <td>{description}</td>
            <td>{phone}</td>
          </tr>
        )
      )}
    </tbody>
  </table>
)

const tableValues = [
  {
    id: '1',
    name: 'Eléctrica',
    phone: '(99) 2224-5678',
    agency: 'Agencia 1',
    description: 'Descrição da Ordem',
    category: {
      name: 'Categoria 1'
    },
    company: 'Empresa 1',
    deadline: new Date()
  }
]

describe('OrdersTable Component', () => {
  it('renders correctly', () => {
    const { container, getByRole } = render(<OrdersTable />)
    expect(container.firstChild).toMatchSnapshot()

    expect(getByRole('button')).toHaveTextContent('New Order')
  })

  it('the values are in the table', () => {
    const { getByText } = render(<OrdersTableMock {...tableValues} />)

    tableValues.forEach(
      ({ id, name, agency, company, phone }: OrdersTableProps) => {
        const row = getByText(id as string).closest('tr')
        // highlight-start
        const utils = within(row as HTMLElement)
        expect(utils.getByText(name)).toBeInTheDocument()
        expect(utils.getByText(agency)).toBeInTheDocument()
        expect(utils.getByText(company)).toBeInTheDocument()
        expect(utils.getByText(phone)).toBeInTheDocument()
        // highlight-end
      }
    )
  })
})
