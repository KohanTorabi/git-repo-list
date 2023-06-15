import { useCallback } from "react";
import { debounce } from "lodash";
import { DEFAULT_GITHUB_USERNAME } from "@/constants/api";
import { SearchIcon } from "@/components/icons/search";

type SearchFormProps = {
  onSubmit: (username: string) => void;
};

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSubmit(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedHandleSearchInputChange = useCallback(
    debounce(handleInputChange, 500),
    []
  );

  return (
    <div className="search-container">
      <SearchIcon />
      <input
        type="text"
        defaultValue={DEFAULT_GITHUB_USERNAME}
        onChange={optimizedHandleSearchInputChange}
        placeholder="Find a repository..."
      />
    </div>
  );
};

export default SearchForm;
