import { OrdersRepository } from '../../repositories/implementations/OrdersRepository';
import { CreateOrderController } from './CreateOrderController';
import { CreateOrderUseCase } from './CreateOrderUseCase';

const ordersRepository = OrdersRepository.getInstance();
const createOrderUseCase = new CreateOrderUseCase(ordersRepository);
const createOrderController = new CreateOrderController(createOrderUseCase);

export { createOrderController };
