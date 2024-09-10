"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Filter() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeFilter = searchParams.get("capacity") ?? "all";

  const handleFilter = (capacity) => {
    const params = new URLSearchParams(searchParams);
    console.log(params);
    params.set("capacity", capacity);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex">
      <Button
        capacity={"all"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      />
      <Button
        capacity={"small"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      />
      <Button
        capacity={"medium"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      />
      <Button
        capacity={"large"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      />
    </div>
  );
}

function Button({ capacity, handleFilter, activeFilter }) {
  let text = "";
  if (capacity === "all") text = "All Cabins";
  if (capacity === "small") text = "1-3 gurests";
  if (capacity === "medium") text = "4-7 gurests";
  if (capacity === "large") text = "8-12 gurests";
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        capacity === activeFilter ? "bg-primary-600" : ""
      }`}
      onClick={() => handleFilter(capacity)}
    >
      {text}
    </button>
  );
}

export default Filter;
