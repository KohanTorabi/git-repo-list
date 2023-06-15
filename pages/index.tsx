import { HomePage } from "@/components/home";
import { fetchRepositories } from "api/fetchRepositories";
import { DEFAULT_GITHUB_USERNAME } from "../constants";

export async function getServerSideProps() {
  try {
    const initialRepos = await fetchRepositories(DEFAULT_GITHUB_USERNAME);
    return {
      props: {
        initialRepos,
      },
    };
  } catch (error) {
    console.error("Error fetching initial repositories:", error);
    return {
      props: {
        initialRepos: [],
      },
    };
  }
}

export default HomePage;
