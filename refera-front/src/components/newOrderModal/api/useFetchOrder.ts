import { api } from 'src/services/api'
import { FormData } from '../'

const fetchOrder = async ({
  name,
  phone,
  agency,
  description,
  category,
  company,
  deadline
}: FormData) => {
  const orderResponse = await api.post('/categories', {
    name,
    phone,
    agency,
    description,
    category,
    company,
    deadline
  })

  return orderResponse.data
}

export { fetchOrder }
