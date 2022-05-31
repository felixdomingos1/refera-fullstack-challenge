import { OrdersRepository } from '../../repositories/implementations/OrdersRepository';
import { ShowOrderController } from './ShowOrderController';
import { ShowOrderUseCase } from './ShowOrderUseCase';

const ordersRepository = OrdersRepository.getInstance();
const showOrderUseCase = new ShowOrderUseCase(ordersRepository);
const showOrderController = new ShowOrderController(showOrderUseCase);

export { showOrderController };
