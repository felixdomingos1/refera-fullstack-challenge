import { api } from 'src/services/api'

const fetchOrders = async () => {
  const ordersResponse = await api.get('/orders')

  return ordersResponse.data
}

export { fetchOrders }
