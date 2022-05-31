import { Request, Response } from 'express';

import { ListAllCategoriesUseCase } from './ListAllCategoriesUseCase';

class ListAllCategoriesController {
  constructor(private listAllCategoriesUseCase: ListAllCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const allCategories = this.listAllCategoriesUseCase.execute();

    return response.status(201).send(allCategories);
  }
}

export { ListAllCategoriesController };
