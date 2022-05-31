export type OrdersTableProps = {
  id?: string
  name: string
  phone: string
  agency: string
  description: string
  category: {
    name: string
  }
  company: string
  deadline: Date
}
