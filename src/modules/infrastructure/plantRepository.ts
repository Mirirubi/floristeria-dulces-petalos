import { Plant } from "../domain/Plant";

async function getAllPlants(): Promise<Plant[]> {
  const response = await fetch(
    "https://dulces-petalos.herokuapp.com/api/product"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const result = await response.json();

  return result;
}

export { getAllPlants };
