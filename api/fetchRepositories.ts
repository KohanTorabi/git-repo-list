import axios from "axios";
import { Repo, SimpleRepo } from "../types";
import { ApiUrls } from "./urls";

export const fetchRepositories = async (
  username: string
): Promise<SimpleRepo[]> => {
  try {
    const response = await axios.get(ApiUrls.github.userRepos(username));
    if (response?.status === 200) {
      const data = response.data;
      return data?.map((repo: Repo) => {
        return {
          id: repo.id,
          name: repo.name,
          isPrivate: repo.private,
          link: repo.html_url,
          language: repo.language,
          updatedAt: repo.updated_at,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          prs: repo.open_issues,
        };
      });
    } else {
      throw new Error("Failed to fetch repositories");
    }
  } catch (error) {
    throw new Error("An error occurred while fetching repositories");
  }
};
