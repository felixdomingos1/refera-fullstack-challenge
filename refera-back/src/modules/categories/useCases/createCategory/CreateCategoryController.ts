import { Response, Request } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.body;

    const category = this.createCategoryUseCase.execute({
      name,
    });

    return response.status(201).send(category);
  }
}

export { CreateCategoryController };
