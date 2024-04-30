"use client";
import React, { useState, useEffect } from "react";
import { obtainPlants } from "@/modules/application/obtainAllPlantsService";
import { Plant } from "@/modules/domain/Plant";
import PlantSummaryButton from "@/components/plantSummaryButton";
import SearchingBlock from "@/components/searchingBlock";
import NotFound from "./not-found";
import Loading from "./loading";

export default function Home() {
  const [allPlants, setAllPlants] = useState<Plant[] | undefined>();
  const [plantsToShow, setPlantsToShow] = useState<Plant[] | undefined>();
  const [plantsNotFound, setPlantsNotFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const repositoryPlants = await obtainPlants();
      setAllPlants(repositoryPlants);
      setPlantsToShow(repositoryPlants);
    };

    fetchData().catch(() => {
      setPlantsNotFound(true);
    });
  }, []);

  if (plantsNotFound) {
    return <NotFound />;
  }

  const plantNamesFilter = (textToMatch: string) => {
    if (allPlants === undefined) {
      return [];
    }

    const textToMatchInLowerCase = textToMatch.toLowerCase();

    return allPlants.filter((plant: Plant) => {
      const nameInLowercase = plant.name.toLowerCase();
      const binomialNameInLowercase = plant.binomialName.toLowerCase();

      return (
        nameInLowercase.includes(textToMatchInLowerCase) ||
        binomialNameInLowercase.includes(textToMatchInLowerCase)
      );
    });
  };

  const updateFilteredPlants = (textToMatch: string) => {
    setPlantsToShow(plantNamesFilter(textToMatch));
  };

  if (plantsToShow) {
    return (
      <>
        <SearchingBlock searchingFunction={updateFilteredPlants} />
        <div className="p-2">
          <div className="plantList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {plantsToShow.map((plant) => {
              return <PlantSummaryButton plant={plant} />;
            })}
          </div>
        </div>
      </>
    );
  }

  return <Loading />;
}
