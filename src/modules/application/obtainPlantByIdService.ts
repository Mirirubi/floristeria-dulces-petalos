import { getPlantById } from "../infrastructure/plantRepository";
import { Plant } from "../domain/Plant";

const obtainPlantById = async (plantId: string): Promise<Plant | void> => {
  let plant = await getPlantById(plantId);
  console.log(plant);
  if (
    plant &&
    plant.id &&
    plant.name &&
    plant.binomialName &&
    plant.imgUrl &&
    plant.price &&
    plant.fertilizerType &&
    plant.heightInCm &&
    plant.wateringsPerWeek
  ) {
    return {
      id: plant.id,
      name: plant.name,
      binomialName: plant.binomialName,
      imgUrl: plant.imgUrl,
      price: plant.price,
      fertilizerType: plant.fertilizerType,
      heightInCm: plant.heightInCm,
      wateringsPerWeek: plant.wateringsPerWeek,
    } as Plant;
  }

  return;
};

export { obtainPlantById };
