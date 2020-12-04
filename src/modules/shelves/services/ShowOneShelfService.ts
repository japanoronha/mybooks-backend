import { inject, injectable } from "tsyringe";
import Shelf from "../infra/typeorm/entities/Shelf";
import IShelfRepository from "../repositories/IShelfRepository";

@injectable()
class ShowOneShelfService {
  constructor(
    @inject('ShelfRepository')
    private shelfRepository: IShelfRepository,
  ) {}

  public async execute(id: number): Promise<Shelf | undefined> {
    const shelf = await this.shelfRepository.findById(id);

    return shelf;
  }
}

export default ShowOneShelfService;
