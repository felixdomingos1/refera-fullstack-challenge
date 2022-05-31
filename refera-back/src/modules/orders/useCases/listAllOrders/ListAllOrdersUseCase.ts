import { OrderInterface } from '../../model';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

class ListAllOrdersUseCase {
  constructor(private ordersRepository: IOrdersRepository) {}

  execute(): OrderInterface[] {
    return this.ordersRepository.list();
  }
}

export { ListAllOrdersUseCase };
