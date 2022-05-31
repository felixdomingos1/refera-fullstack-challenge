import { useState, useEffect } from 'react'
import { fetchOrders } from './api/useFetchOrders'
import { OrdersTableProps } from './types'

import * as S from './styles'

export function OrdersTable() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
      .then(orders => setOrders(orders))
      .catch(err => console.log(err))
  }, [])

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Contact</th>
            <th>Agency</th>
            <th>Company</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map(
            ({
              id,
              name,
              category,
              phone,
              company,
              agency,
              deadline
            }: OrdersTableProps) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{category?.name}</td>
                <td>
                  {name} {phone}
                </td>
                <td>{agency}</td>
                <td>{company}</td>
                <td>{String(deadline)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </S.Container>
  )
}
