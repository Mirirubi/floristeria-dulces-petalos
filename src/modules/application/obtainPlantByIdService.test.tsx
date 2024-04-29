import { Plant } from "../domain/Plant";
import { obtainPlantById } from "./obtainPlantByIdService";
import * as getPlantById from "../infrastructure/plantRepository";

const plantId: string = "id";

const repoPlant = {
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
  fertilizerType: "aFertilizerType",
  heightInCm: 10,
  wateringsPerWeek: 1,
};

const incompletePlantRepoResponse = {
  id: "id",
  name: "PlantName",
  binomialName: "PlantBinomialName",
  fertilizerType: "aFertilizerType",
};

test("Plant is returned correctly when has all the properties", async () => {
  const repoResponse = repoPlant;
  jest.spyOn(getPlantById, "getPlantById").mockResolvedValue(repoResponse);

  const expectedPlant: Plant = mappedPlant;

  const plant = await obtainPlantById(plantId);

  expect(plant).toEqual(expectedPlant);
});

test("When plant does not match the requirements is not returned", async () => {
  const repoResponse = incompletePlantRepoResponse;
  jest
    .spyOn(getPlantById, "getPlantById")
    .mockResolvedValue(repoResponse as Plant);

  const expectedPlant: any = undefined;

  const plant = await obtainPlantById(plantId);

  expect(plant).toEqual(expectedPlant);
});
