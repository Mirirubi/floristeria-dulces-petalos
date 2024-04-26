import { getPlantById } from "../infrastructure/plantRepository";
import { Plant } from "../domain/Plant";

async function obtainPlantById(plantId: string): Promise<Plant> {
  return await getPlantById(plantId);
}

export { obtainPlantById };
