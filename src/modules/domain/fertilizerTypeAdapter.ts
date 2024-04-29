export type FertilizerType = "nitrogen" | "phosphorus";

export const fertilizerTypeAdapter: Record<FertilizerType, string> = {
  nitrogen: "nitrogenado",
  phosphorus: "fosforado",
};