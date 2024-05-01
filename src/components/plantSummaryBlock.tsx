import Link from "next/link";
import Image from "next/image";
import { Plant } from "@/modules/domain/Plant";

interface PlantSummaryBlockProps {
  plant: Plant;
}

const PlantSummaryBlock = (props: PlantSummaryBlockProps) => {
  const { plant } = props;

  return (
    <Link href={`/${plant.id}`} key={plant.id}>
      <div className="listViewItem button">
        <div className="listViewItemTitleContainer secondaryTitleText">
          {plant.name}
        </div>
        <div className="imageContainer">
          <Image
            src={plant.imgUrl}
            alt={`Imagen de ${plant.name}`}
            unoptimized
            width={240}
            height={240}
          ></Image>
        </div>
        <div className="listViewItemCaptionContainer">
          <div className="primaryCaptionText">{plant.binomialName}</div>
          <div className="secondaryRelevantText">{plant.price} €</div>
        </div>
      </div>
    </Link>
  );
};

export default PlantSummaryBlock;
