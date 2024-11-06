import Image from "next/image";
import { useEffect } from "react";
import CarsList from "./components/carsList/carsList"
export default function Home() {

  return (
    <div>
      <CarsList />
    </div>
  );
}
