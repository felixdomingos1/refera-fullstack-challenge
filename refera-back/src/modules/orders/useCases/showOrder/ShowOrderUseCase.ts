import { OrderInterface } from '../../model';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

interface IRequest {
  order_id: string;
}

class ShowOrderUseCase {
  constructor(private ordersRepository: IOrdersRepository) {}

  execute({ order_id }: IRequest): OrderInterface {
    const order = this.ordersRepository.findById(order_id);

    if (!this.orderExists({ order_id })) {
      throw new Error('Order does not exist');
    }

    return order;
  }

  orderExists({ order_id }: IRequest): boolean {
    const order = this.ordersRepository.findById(order_id);

    return !!order;
  }
}

export { ShowOrderUseCase };
