import { Router } from 'express';

import { createOrderController } from '../modules/orders/useCases/createOrder';
import { listAllOrdersController } from '../modules/orders/useCases/listAllOrders';
import { showOrderController } from '../modules/orders/useCases/showOrder';

const ordersRoutes = Router();

ordersRoutes.post('/', (request, response) => createOrderController.handle(request, response));

ordersRoutes.get('/:order_id', (request, response) => showOrderController.handle(request, response));

ordersRoutes.get('/', (request, response) => listAllOrdersController.handle(request, response));

export { ordersRoutes };
