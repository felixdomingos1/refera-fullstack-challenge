import type { NextPage } from 'next'
import Head from 'next/head'
import { NewOrderModal } from 'src/components/newOrderModal'
import { OrdersTable } from 'src/components/ordersTable'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Refera</title>
      </Head>
      <main>
        <NewOrderModal />
        <OrdersTable />
      </main>
    </div>
  )
}

export default Home
