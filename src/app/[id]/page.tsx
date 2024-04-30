"use client";
import { obtainPlantById } from "@/modules/application/obtainPlantByIdService";
import { Plant } from "@/modules/domain/Plant";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PlantDetailsBlock from "@/components/plantDetailsBlock";
import NotFound from "../not-found";
import Loading from "../loading";
import { useHeaderContext } from "../../context/headerContext";

export default function Details({ params }: { params: { id: string } }) {
  const [plant, setPlant] = useState<Plant>();
  const [plantNotFound, setPlantNotFound] = useState<boolean>(false);
  const { setHeaderInfo } = useHeaderContext();

  useEffect(() => {
    const fetchplant = async () => {
      const requestedPlant = await obtainPlantById(params.id);
      if (requestedPlant) {
        setPlant(requestedPlant);
        setHeaderInfo({ breadcrumbName: requestedPlant.name });
      }
    };

    fetchplant().catch((e) => {
      setPlantNotFound(true);
    });
  }, []);

  if (plantNotFound) {
    return <NotFound />;
  }

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

  return <Loading />;
}
