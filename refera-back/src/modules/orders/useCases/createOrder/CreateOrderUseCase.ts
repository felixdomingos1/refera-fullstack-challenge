import { OrderInterface } from '../../model';

import { IOrdersRepository } from '../../repositories/IOrdersRepository';

interface IRequest {
  name: string;
  phone: string;
  agency: string;
  description?: string;
  company: string;
  category: string;
  deadline: Date;
}

class CreateOrderUseCase {
  constructor(private ordersRepository: IOrdersRepository) {}

  execute({ name, agency, category, company, deadline, phone, description }: IRequest): OrderInterface {
    return this.ordersRepository.create({ name, agency, category, company, deadline, phone, description });
  }
}

export { CreateOrderUseCase };
