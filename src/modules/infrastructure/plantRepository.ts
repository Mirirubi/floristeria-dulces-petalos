import { Plant } from "../domain/Plant";

async function getAllPlants(): Promise<Plant[]> {
  const response = await fetch(
    "https://dulces-petalos.herokuapp.com/api/product"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

async function getPlantById(plantId: string): Promise<Plant> {
  const response = await fetch(
    `https://dulces-petalos.herokuapp.com/api/product/${plantId}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const plant = await response.json();
  console.log(plant);
  return plant;
}

export { getAllPlants, getPlantById };
