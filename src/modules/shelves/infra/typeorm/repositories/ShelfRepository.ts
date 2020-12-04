import CreateShelfDTO from "@modules/shelves/dtos/CreateShelfDTO";
import IShelfRepository from "@modules/shelves/repositories/IShelfRepository";
import { getRepository, Repository } from "typeorm";
import Shelf from "../entities/Shelf";

class ShelfRepository implements IShelfRepository {
  private ormRepository: Repository<Shelf>;

  constructor() {
    this.ormRepository = getRepository(Shelf)
  }

  public async findAll(): Promise<Shelf[]>{
    const shelves = await this.ormRepository.find();

    return shelves;
  }

  public async findById(id: number): Promise<Shelf | undefined>{
    const shelf = await this.ormRepository.findOne(id);

    return shelf;
  }


  public async create(data: CreateShelfDTO): Promise<Shelf>{
    const shelf = this.ormRepository.create(data);

    await this.ormRepository.save(shelf);

    return shelf;
  }
}

export default ShelfRepository
