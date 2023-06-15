import { SimpleRepo } from "types";
import RepoCard from "../repoCard";
import React from "react";

type RepoListProps = {
  repos: SimpleRepo[];
};

const RepoList = ({ repos }: RepoListProps) => {
  return (
    <div className="repo-list">
      {repos?.length > 0 ? (
        repos.map((repo, index) => (
          <div key={repo.id}>
            <RepoCard repo={repo} />
            {index !== repos.length - 1 && <div className="divider" />}
          </div>
        ))
      ) : (
        <div className="no-data-container">No Data</div>
      )}
    </div>
  );
};

export default React.memo(RepoList);
