import { DataFlowIcon } from "@/components/icons/dataFlow";
import { OpenNewTabIcon } from "@/components/icons/openNewTab";
import { PullRequestIcon } from "@/components/icons/pullRequest";
import { StarIcon } from "@/components/icons/star";
import { SimpleRepo } from "@/types/repo";
import { getLastUpdateTime } from "@/utils/time";
import React from "react";

type RepoCardProps = {
  repo: SimpleRepo;
};

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className="repo-card">
      <div className="title-container">
        <a href={repo.link} target="_blank">
          <h3>{repo.name}</h3>
          <OpenNewTabIcon />
        </a>
        <div className={`tag ${repo.isPrivate ? "private" : "public"}`}>
          {repo.isPrivate ? "Private" : "Public"}
        </div>
      </div>
      <div className="detail-container">
        <div className="langs">{repo.language || "Unknown"}</div>
        <div className="icon-with-text">
          <StarIcon />
          <span>{repo.stars}</span>
        </div>
        <div className="icon-with-text">
          <DataFlowIcon />
          <span>{repo.forks}</span>
        </div>
        <div className="icon-with-text">
          <PullRequestIcon />
          <span>{repo.prs}</span>
        </div>
        <div className="last-update">{getLastUpdateTime(repo.updatedAt)}</div>
      </div>
    </div>
  );
};

export default RepoCard;
