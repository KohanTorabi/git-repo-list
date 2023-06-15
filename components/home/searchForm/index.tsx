import { useState } from "react";
import { debounce } from "lodash";
import { DEFAULT_GITHUB_USERNAME } from "@/constants/api";
import { SearchIcon } from "@/components/icons/search";

type SearchFormProps = {
  onSubmit: (username: string) => void;
};

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [username, setUsername] = useState(DEFAULT_GITHUB_USERNAME);

  const debouncedSubmit = debounce((username: string) => {
    onSubmit(username);
  }, 300);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUsername(value);
    debouncedSubmit(value);
  };

  return (
    <div className="search-container">
      <SearchIcon />
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Find a repository..."
      />
    </div>
  );
};

export default SearchForm;
