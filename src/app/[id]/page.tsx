"use client";
import { obtainPlantById } from "@/modules/application/obtainPlantByIdService";
import { Plant } from "@/modules/domain/Plant";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PlantDetailsInfoBlock from "@/components/plantDetailsInfoBlock";
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
      <div className="detailViewContainer">
        <div className="detailViewButtonContainer">
          <Link href={`/`}>
            <div className="primaryButton">Back</div>
          </Link>
        </div>
        <div className="detailViewItemContainer">
          <div className="detailViewImageContainer">
            <Image
              src={plant.imgUrl}
              alt={`Imagen de ${plant.name}`}
              unoptimized
              width={350}
              height={350}
            />
          </div>
          <PlantDetailsInfoBlock plant={plant} />
        </div>
      </div>
    );
  }

  return <Loading />;
}
