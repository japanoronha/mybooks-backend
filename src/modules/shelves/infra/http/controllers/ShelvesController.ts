import CreateShelfService from "@modules/shelves/services/CreateShelfService";
import ShowOneShelfService from "@modules/shelves/services/ShowOneShelfService";
import ShowShelvesService from "@modules/shelves/services/ShowShelvesService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class ShelvesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const createShelf = container.resolve(CreateShelfService);

    const shelf = await createShelf.execute({title});

    return response.json(shelf);
  }

  public async listAll(request: Request, response: Response): Promise<Response> {
    const showShelves = container.resolve(ShowShelvesService);

    const shelves = await showShelves.execute();

    return response.json(shelves);
  }

  public async findOne(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showOneShelf = container.resolve(ShowOneShelfService);

    const shelf = await showOneShelf.execute(Number(id));

    return response.json(shelf);
  }
}
