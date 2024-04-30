import { Plant } from "@/modules/domain/Plant";
import { fertilizerTypeAdapter } from "../modules/domain/fertilizerTypeAdapter";

interface PlantSummaryButtonProps {
  plant: Plant;
}

const PlantDetailsBlock = (props: PlantSummaryButtonProps) => {
  const { plant } = props;

  const wateringFrequency = () => {
    if (plant.wateringsPerWeek === 1) {
      return "una vez";
    }
    return `${plant.wateringsPerWeek} veces`;
  };

  return (
    <div className="mx-auto flex flex-col justify-center p-8 w-90">
      <div className="text-2xl font-bold">{plant.name}</div>
      <div className="text-sm">{plant.binomialName}</div>
      <ul className="list-inside my-8 ml-4">
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
      <div className="text-2xl font-medium flex justify-end">
        {plant.price} €
      </div>
    </div>
  );
};

export default PlantDetailsBlock;
