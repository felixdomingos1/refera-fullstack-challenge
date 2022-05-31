import { Request, Response } from 'express';

import { ShowCategoryUseCase } from './ShowCategoryUseCase';

class ShowCategoryController {
  constructor(private showCategoryUseCase: ShowCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { category_id } = request.params;

    if (!this.showCategoryUseCase.categoryExists({ category_id })) {
      return response.status(404).send({ error: 'User not found' });
    }

    const category = this.showCategoryUseCase.execute({ category_id });

    return response.status(201).send(category);
  }
}

export { ShowCategoryController };
