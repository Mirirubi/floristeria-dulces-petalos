"use client";
import React, { useState, useEffect } from "react";
import { obtainPlants } from "@/modules/application/obtainAllPlantsService";
import { Plant } from "@/modules/domain/Plant";
import PlantSummaryButton from "@/components/plantSummaryButton";
import Image from "next/image";

export default function Home() {
  const [plants, setPlants] = useState<Plant[]>();

  useEffect(() => {
    const fetchData = async () => {
      setPlants(await obtainPlants());
    };

    fetchData().catch((e) => {
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

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
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="animate-spin h-12 w-12 mx-8">
        <Image src="/load.png" alt="Loading" width={100} height={100} />
      </div>
    </div>
  );
}
