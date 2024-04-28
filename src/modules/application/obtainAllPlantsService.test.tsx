import { Plant } from "../domain/Plant";
import { obtainPlants } from "./obtainAllPlantsService";
import * as getAllPlants from "../infrastructure/plantRepository";

const plant = {
  id: "id",
  name: "PlantName",
  binomialName: "PlantBinomialName",
  fertilizerType: "aFertilizerType",
  heightInCm: 10,
  imgUrl: "PlantImgUrl",
  price: 1,
  wateringsPerWeek: 1,
};

const mappedPlant: Plant = {
  id: "id",
  name: "PlantName",
  binomialName: "PlantBinomialName",
  imgUrl: "PlantImgUrl",
  price: 1,
};

const incompletePlantRepoResponse = {
  id: "id",
  name: "PlantName",
  binomialName: "PlantBinomialName",
  fertilizerType: "aFertilizerType",
};

test("All plants are returned correctly when the plants received match the requirements", async () => {
  const repoResponse = [plant, plant];
  jest.spyOn(getAllPlants, "getAllPlants").mockResolvedValue(repoResponse);

  const expectedPlants: Plant[] = [mappedPlant, mappedPlant];

  const plants = await obtainPlants();

  expect(plants).toEqual(expectedPlants);
});

test("Plants that do not match the requirements are not returned", async () => {
  const repoResponse = [plant, incompletePlantRepoResponse];
  jest
    .spyOn(getAllPlants, "getAllPlants")
    .mockResolvedValue(repoResponse as Plant[]);

  const expectedPlants: Plant[] = [mappedPlant];
  const plants = await obtainPlants();

  expect(plants).toEqual(expectedPlants);
});
