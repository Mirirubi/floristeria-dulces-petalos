import { Plant } from "@/modules/domain/Plant";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Details from "../app/[id]/page";
import React from "react";
import * as obtaintPlantByIdService from "../modules/application/obtainPlantByIdService";
import { HeaderProvider } from "@/context/headerContext";

const plantId = "id";

const plant: Plant = {
  id: plantId,
  name: "Rosa",
  binomialName: "Rosa",
  imgUrl: "url",
  price: 25,
  fertilizerType: "nitrogen",
  heightInCm: 10,
  wateringsPerWeek: 2,
};

jest.mock("../modules/application/obtainPlantByIdService", () => {
  return {
    __esModule: true,
    ...jest.requireActual("../modules/application/obtainPlantByIdService"),
  };
});

describe("Details", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it("Renders plant details", async () => {
    jest
      .spyOn(obtaintPlantByIdService, "obtainPlantById")
      .mockResolvedValue(plant);

    render(
      <HeaderProvider>
        <Details
          params={{
            id: plantId,
          }}
        />
      </HeaderProvider>
    );

    const nameText = await screen.findAllByText("Rosa");

    expect(nameText).toBeDefined();
  });

  it("Renders loading view", async () => {
    render(
      <HeaderProvider>
        <Details
          params={{
            id: plantId,
          }}
        />
      </HeaderProvider>
    );

    const loadingImage = screen.getByAltText("Loading");

    expect(loadingImage).toBeInTheDocument();
  });

  it("Renders not found page", async () => {
    jest
      .spyOn(obtaintPlantByIdService, "obtainPlantById")
      .mockRejectedValue(new Error("Plant not found"));

    render(
      <HeaderProvider>
        <Details
          params={{
            id: plantId,
          }}
        />
      </HeaderProvider>
    );

    const notFoundText = await screen.findAllByText("Algo ha ido mal");

    expect(notFoundText).toBeDefined();
  });
});
