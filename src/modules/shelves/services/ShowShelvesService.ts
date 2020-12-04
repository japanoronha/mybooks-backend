import { inject, injectable } from "tsyringe";
import Shelf from "../infra/typeorm/entities/Shelf";
import IShelfRepository from "../repositories/IShelfRepository";

interface IRequest {
  title: string;
}

@injectable()
class ShowShelvesService {
  constructor(
    @inject('ShelfRepository')
    private shelfRepository: IShelfRepository,
  ) {}

  public async execute(): Promise<Shelf[]> {
    const shelves = await this.shelfRepository.findAll();
    return shelves;
  }
}

export default ShowShelvesService;
