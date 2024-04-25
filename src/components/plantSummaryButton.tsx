import Link from "next/link";
import Image from "next/image";
import { Plant } from "@/modules/domain/Plant";

interface PlantSummaryButtonProps {
  plant: Plant;
}
const PlantSummaryButton = (props: PlantSummaryButtonProps) => {
  const { plant } = props;
  return (
    <Link href={`/${plant.name}`} key={plant.name}>
      <div className="button flex flex-col rounded-2xl bg-harp items-center p-2 m-2">
        <div className="text-lg font-bold py-2">{plant.name}</div>
        <div className="imageContainer">
          <Image
            src={plant.imgUrl}
            alt={`Imagen de ${plant.name}`}
            unoptimized
            width={240}
            height={240}
            objectPosition="center"
          ></Image>
        </div>
        <div className="py-2 flex flex-col text-center">
          <div className="text-sm">{plant.binomialName}</div>
          <div className="text-lg font-semibold">{plant.price} €</div>
        </div>
      </div>
    </Link>
  );
};
export default PlantSummaryButton;
