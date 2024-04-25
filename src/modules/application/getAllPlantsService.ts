import { getAllPlants } from "../infrastructure/plantRepository";
import { Plant } from "../domain/Plant";

async function getPlants(): Promise<Plant[]> {
  return await getAllPlants();
}

export { getPlants };
