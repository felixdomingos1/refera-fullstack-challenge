import { Request, Response } from 'express';

import { ListAllOrdersUseCase } from './ListAllOrdersUseCase';

class ListAllOrdersController {
  constructor(private listAllOrdersUseCase: ListAllOrdersUseCase) {}

  handle(request: Request, response: Response): Response {
    const allOrders = this.listAllOrdersUseCase.execute();

    return response.status(201).send(allOrders);
  }
}

export { ListAllOrdersController };
