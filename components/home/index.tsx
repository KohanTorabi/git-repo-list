import { useMemo, useState } from "react";
import FilterButtons from "components/home/filterButtons";
import SearchForm from "components/home/searchForm";
import { SimpleRepo, RepoFilters } from "types/repo";
import { ApiUrls } from "api/urls";
import RepoList from "./repoList";
import Layout from "./layout";
import { fetchRepositories } from "api/fetchRepositories";

type HomePageProps = {
  initialRepos: SimpleRepo[];
};

export const HomePage = ({ initialRepos }: HomePageProps) => {
  const [repos, setRepos] = useState<SimpleRepo[]>(initialRepos);

  const [activeFilter, setActiveFilter] = useState<RepoFilters>(
    RepoFilters.All
  );

  const fetchRepos = async (username: string) => {
    try {
      const response = await fetchRepositories(username);
      setRepos(response);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter as RepoFilters);
  };

  const filteredRepos = useMemo(
    () =>
      activeFilter === RepoFilters.All
        ? repos
        : repos.filter((repo) =>
            activeFilter === RepoFilters.Public
              ? !repo.isPrivate
              : repo.isPrivate
          ),
    [repos, activeFilter]
  );

  return (
    <Layout>
      <div>
        <h1>Repositories</h1>
        <div className="repo-container">
          <FilterButtons
            activeFilter={activeFilter}
            onChangeFilter={handleFilterChange}
          />

          <SearchForm onSubmit={fetchRepos} />

          <RepoList repos={filteredRepos} />
        </div>
      </div>
    </Layout>
  );
};
