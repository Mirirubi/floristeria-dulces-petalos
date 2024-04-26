import { getAllPlants } from "../infrastructure/plantRepository";
import { Plant } from "../domain/Plant";

async function obtainPlants(): Promise<Plant[]> {
  return await getAllPlants();
}

export { obtainPlants };
