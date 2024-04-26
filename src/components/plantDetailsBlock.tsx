import { Plant } from "@/modules/domain/Plant";

const fertilizerAdapter = { phosphorus: "fosforado", nitrogen: "nitrogenado" };
//           Fertilizante recomendado: {fertilizerAdapter[plant.fertilizerType]}

interface PlantSummaryButtonProps {
  plant: Plant;
}
const PlantDetailsBlock = (props: PlantSummaryButtonProps) => {
  const { plant } = props;

  return (
    <div className="mx-auto flex flex-col justify-center p-8 w-90">
      <div className="text-2xl font-bold">{plant.name}</div>
      <div className="text-sm">{plant.binomialName}</div>
      <ul className="list-inside my-8 ml-4">
        <li>Regar {plant.wateringsPerWeek} veces a la semana</li>
        <li>Fertilizante recomendado: {plant.fertilizerType}</li>
        <li>Hasta {plant.heightInCm} cm de alto</li>
      </ul>
      <div className="text-2xl font-medium flex justify-end">
        {plant.price} €
      </div>
    </div>
  );
};

export default PlantDetailsBlock;
