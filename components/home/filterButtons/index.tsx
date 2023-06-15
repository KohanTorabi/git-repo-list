import { FilterIcon } from "@/components/icons/filter";
import { RepoFilters } from "@/types/repo";
import React from "react";

type FilterButtonsProps = {
  activeFilter: string;
  onChangeFilter: (filter: string) => void;
};

const FilterButtons = ({
  activeFilter,
  onChangeFilter,
}: FilterButtonsProps) => {
  return (
    <div className="filter-container">
      <div className="label">
        <FilterIcon />
        <span>Filter</span>
      </div>
      <div className="buttons-container">
        {Object.keys(RepoFilters).map((filter) => (
          <button
            key={filter}
            className={filter?.toLowerCase() === activeFilter ? "active" : ""}
            onClick={() => onChangeFilter(filter?.toLowerCase())}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
