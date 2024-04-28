"use client";
import React, { useState, useEffect } from "react";
import { obtainPlants } from "@/modules/application/obtainAllPlantsService";
import { Plant } from "@/modules/domain/Plant";
import PlantSummaryButton from "@/components/plantSummaryButton";
import Image from "next/image";
import SearchingBlock from "@/components/searchingBlock";

export default function Home() {
  const [plantsToShow, setAllPlantsToShow] = useState<Plant[] | undefined>();
  let allPlants: Plant[] = [];

  useEffect(() => {
    const fetchData = async () => {
      allPlants = await obtainPlants();
      setAllPlantsToShow(allPlants);
    };

    fetchData().catch((e) => {
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  const plantNamesFilter = (textToMatch: string) => {
    if (allPlants === undefined) {
      return [];
    }

    return allPlants.filter((item: Plant) => {
      const nameInLowercase = item.name.toLowerCase();
      const binomialNameInLowercase = item.binomialName.toLowerCase();
      const textToMatchInLowerCase = textToMatch.toLowerCase();

      return (
        nameInLowercase.includes(textToMatchInLowerCase) ||
        binomialNameInLowercase.includes(textToMatchInLowerCase)
      );
    });
  };

  if (plantsToShow) {
    return (
      <>
        <SearchingBlock searchingFunction={plantNamesFilter} />
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

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="animate-spin h-12 w-12 mx-8">
        <Image src="/load.png" alt="Loading" width={100} height={100} />
      </div>
    </div>
  );
}
