"use client";
import { obtainPlantById } from "@/modules/application/obtainPlantByIdService";
import { Plant } from "@/modules/domain/Plant";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PlantDetailsBlock from "@/components/plantDetailsBlock";

export default function Details({ params }: { params: { id: string } }) {
  const [plant, setPlant] = useState<Plant>();

  useEffect(() => {
    const fetchplant = async () => {
      setPlant(await obtainPlantById(params.id));
    };

    fetchplant().catch((e) => {
      console.error("An error occurred while fetching the plant: ", e);
    });
  }, []);

  console.log(plant);

  if (plant) {
    return (
      <div className="product mb-32 max-w-3xl mx-auto">
        <div className="px-8 flex justify-end">
          <Link href={`/`}>
            <div className="button rounded-full bg-harp text-center max-w-min px-6 p-1">
              Back
            </div>
          </Link>
        </div>
        <div className="mx-auto px-4 p-8 grid grid-cols-1 md:grid-cols-2">
          <div className="detailsImg flex justify-center">
            <Image
              src={plant.imgUrl}
              alt={`Imagen de ${plant.name}`}
              unoptimized
              width={350}
              height={350}
              objectPosition="center"
            />
          </div>
          <PlantDetailsBlock plant={plant} />
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
