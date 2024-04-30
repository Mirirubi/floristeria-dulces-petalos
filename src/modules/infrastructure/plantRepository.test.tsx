import { Plant } from "../domain/Plant";
import { getAllPlants, getPlantById } from "./plantRepository";

const plantId = "id";

const plantRepoResponse = {
  id: "id",
  name: "PlantName",
  binomialName: "PlantBinomialName",
  heightInCm: 10,
  imgUrl: "PlantImgUrl",
  price: 1,
  wateringsPerWeek: 1,
};

const typedPlant: Plant = plantRepoResponse;

test("All plants are returned correctly when getting them from the API", async () => {
  const repoResponse = [plantRepoResponse, plantRepoResponse];
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(repoResponse),
  });
  const expectedPlants: Plant[] = [typedPlant, typedPlant];

  const plants = await getAllPlants();

  expect(plants).toEqual(expectedPlants);
});

test("No plants are returned when the Api is reached but no plants are returned", async () => {
  const repoResponse: any[] = [];

  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(repoResponse),
  });
  const expectedPlants: Plant[] = [];

  const plants = await getAllPlants();

  expect(plants).toEqual(expectedPlants);
});

test("Throws error when Api call does not work", async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 404 });

  await expect(getAllPlants()).rejects.toThrow("HTTP error! status: 404");
});

test("Plant is returned correctly when getting it from the API", async () => {
  const repoResponse = plantRepoResponse;
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(repoResponse),
  });
  const expectedPlant: Plant = typedPlant;

  const plant = await getPlantById(plantId);

  expect(plant).toEqual(expectedPlant);
});

test("No plants are returned when the Api is reached but no plants are returned", async () => {
  const repoResponse: any = null;

  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(repoResponse),
  });
  const expectedPlant: any = null;

  const plant = await getPlantById(plantId);

  expect(plant).toEqual(expectedPlant);
});

test("Throws error when Api call does not work", async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 404 });

  await expect(getPlantById(plantId)).rejects.toThrow(
    "HTTP error! status: 404"
  );
});
