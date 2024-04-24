import React from "react";

export default function Details({ params }: { params: { name: string } }) {
  return <>Detalles: {params.name}</>;
}
