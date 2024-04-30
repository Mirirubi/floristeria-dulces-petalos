import { Plant } from "../domain/Plant";

const getAllPlants = async (): Promise<Plant[]> => {
  const response = await fetch(
    "https://dulces-petalos.herokuapp.com/api/product"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

const getPlantById = async (plantId: string): Promise<Plant> => {
  const response = await fetch(
    `https://dulces-petalos.herokuapp.com/api/product/${plantId}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export { getAllPlants, getPlantById };
