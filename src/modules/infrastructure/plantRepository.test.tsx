import { Plant } from "../domain/Plant";
import { getAllPlants } from "./plantRepository";

const plantRepoResponse = {
  id: "id",
  name: "PlantName",
  binomialName: "PlantBinomialName",
  fertilizerType: "aFertilizerType",
  heightInCm: 10,
  imgUrl: "PlantImgUrl",
  price: 1,
  wateringsPerWeek: 1,
};

const typedPlant: Plant = plantRepoResponse;

test("All plants are returned correctly when we get them from the API", async () => {
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
