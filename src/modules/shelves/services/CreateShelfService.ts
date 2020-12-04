import { inject, injectable } from "tsyringe";
import Shelf from "../infra/typeorm/entities/Shelf";
import IShelfRepository from "../repositories/IShelfRepository";

interface IRequest {
  title: string;
}

@injectable()
class CreateShelfService {
  constructor(
    @inject('ShelfRepository')
    private shelfRepository: IShelfRepository,
  ) {}

  public async execute({title}: IRequest): Promise<Shelf> {
    const shelf = await this.shelfRepository.create({ title });
    return shelf;
  }
}

export default CreateShelfService;
