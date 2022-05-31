import { Request, Response } from 'express';

import { ShowOrderUseCase } from './ShowOrderUseCase';

class ShowOrderController {
  constructor(private showOrderUseCase: ShowOrderUseCase) {}

  handle(request: Request, response: Response): Response {
    const { order_id } = request.params;

    if (!this.showOrderUseCase.orderExists({ order_id })) {
      return response.status(404).send({ error: 'Order not found' });
    }

    const oredr = this.showOrderUseCase.execute({ order_id });

    return response.status(201).send(oredr);
  }
}

export { ShowOrderController };
