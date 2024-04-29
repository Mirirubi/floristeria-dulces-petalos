import { FertilizerType } from "./fertilizerTypeAdapter";

export interface Plant {
  id: string;
  name: string;
  binomialName: string;
  imgUrl: string;
  price: number;
  fertilizerType?: FertilizerType;
  heightInCm?: number;
  wateringsPerWeek?: number;
}
