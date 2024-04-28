import { getAllPlants } from "../infrastructure/plantRepository";
import { Plant } from "../domain/Plant";

async function obtainPlants(): Promise<Plant[]> {
  let allPlants = await getAllPlants();

  allPlants = allPlants.filter(
    (plant) =>
      plant.id &&
      plant.name &&
      plant.binomialName &&
      plant.imgUrl &&
      plant.price
  );

  allPlants = allPlants.map(
    (plant) =>
      ({
        id: plant.id,
        name: plant.name,
        binomialName: plant.binomialName,
        imgUrl: plant.imgUrl,
        price: plant.price,
      } as Plant)
  );

  return allPlants;
}

export { obtainPlants };
