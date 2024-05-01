import { Plant } from "@/modules/domain/Plant";
import { fertilizerTypeAdapter } from "../modules/domain/fertilizerTypeAdapter";

interface PlantSummaryBlockProps {
  plant: Plant;
}

const PlantDetailsInfoBlock = (props: PlantSummaryBlockProps) => {
  const { plant } = props;

  const wateringFrequency = () => {
    if (plant.wateringsPerWeek === 1) {
      return "una vez";
    }
    return `${plant.wateringsPerWeek} veces`;
  };

  return (
    <div className="detailViewInfoContainer">
      <div className="primaryTitleText">{plant.name}</div>
      <div className="primaryCaptionText">{plant.binomialName}</div>
      <ul className="detailViewListingContainer">
        {plant.wateringsPerWeek && (
          <li>Regar {wateringFrequency()} a la semana</li>
        )}
        {plant.fertilizerType && (
          <li>
            Fertilizante recomendado:{" "}
            {fertilizerTypeAdapter[plant.fertilizerType]}
          </li>
        )}
        {plant.heightInCm && <li>Hasta {plant.heightInCm} cm de alto</li>}
      </ul>
      <div className="primaryRelevantText">{plant.price} €</div>
    </div>
  );
};

export default PlantDetailsInfoBlock;
