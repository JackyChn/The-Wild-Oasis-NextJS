import { getCabins } from "../_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "./CabinCard";

async function CabinList({ capacity }) {
  // noStore();
  const cabins = await getCabins();
  if (!cabins.length) return [];

  // display cabins by capacity filter
  let displayCabins;
  if (capacity === "all") displayCabins = cabins;
  if (capacity === "small")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (capacity === "medium")
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (capacity === "large")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 3);

  if (!cabins.length) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
