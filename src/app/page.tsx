"use client";
import React, { useState, useEffect } from "react";
import { getPlants } from "@/modules/application/getAllPlantsService";
import { Plant } from "@/modules/domain/Plant";
import PlantSummaryButton from "@/components/plantSummaryButton";

export default function Home() {
  const [plants, setPlants] = useState<Plant[]>();

  useEffect(() => {
    const fetchData = async () => {
      setPlants(await getPlants());
    };

    fetchData().catch((e) => {
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  console.log(plants);

  if (plants) {
    return (
      <div className="p-2">
        <div className="plantList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {plants.map((plant) => {
            return <PlantSummaryButton plant={plant} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="p-2">Page.tsx </div>
    </>
  );
}
