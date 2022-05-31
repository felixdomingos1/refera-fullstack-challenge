import { api } from 'src/services/api'

const fetchCategories = async () => {
  const categoriesResponse = await api.get('/categories')

  return categoriesResponse.data
}

export { fetchCategories }
