import { OrdersRepository } from '../../repositories/implementations/OrdersRepository';
import { ListAllOrdersController } from './ListAllOrdersController';
import { ListAllOrdersUseCase } from './ListAllOrdersUseCase';

const ordersRepository = OrdersRepository.getInstance();
const listAllOrdersUseCase = new ListAllOrdersUseCase(ordersRepository);
const listAllOrdersController = new ListAllOrdersController(listAllOrdersUseCase);

export { listAllOrdersController };
