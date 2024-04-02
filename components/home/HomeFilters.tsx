import React from "react";
import { Button } from "../ui/button";
import { HomePageFilters } from "@/constants/filters";

const HomeFilters = () => {
  const isActive = "";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 w-full md:flex">
      {HomePageFilters.map((itme) => {
        return (
          <Button
            key={itme.value}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${isActive === itme.value ? "bg-primary-100 text-primary-500" : "bg-light-800 text-light-500"}
            hover:bg-light-800 dark:bg-dark-300
            dark:hover:bg-dark-300
            `}
          >
            {itme.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilters;
