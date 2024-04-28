export interface Plant {
  id: string;
  name: string;
  binomialName: string;
  imgUrl: string;
  price: number;
  fertilizerType?: string;
  heightInCm?: number;
  wateringsPerWeek?: number;
}
