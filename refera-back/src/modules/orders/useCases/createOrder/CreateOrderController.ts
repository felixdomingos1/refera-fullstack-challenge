import { Response, Request } from 'express';

import { CreateOrderUseCase } from './CreateOrderUseCase';

class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, agency, category, company, deadline, phone, description } = request.body;

    const order = this.createOrderUseCase.execute({
      name,
      agency,
      category,
      company,
      deadline,
      phone,
      description,
    });

    return response.status(201).send(order);
  }
}

export { CreateOrderController };
