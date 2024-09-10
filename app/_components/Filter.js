"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Filter() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (capacity) => {
    const params = new URLSearchParams(searchParams);
    console.log(params);
    params.set("capacity", capacity);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex">
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("all")}
      >
        All Cabins
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("small")}
      >
        1&mdash;3 gurests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7 gurests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 gurests
      </button>
    </div>
  );
}

export default Filter;
