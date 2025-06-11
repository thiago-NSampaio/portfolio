import { Octokit } from "@octokit/rest";

interface GithubStats {
  totalRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
}

export async function getGithubStats(): Promise<GithubStats> {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const username = "thiago-NSampaio";

  try {
    const [user, repos] = await Promise.all([
      octokit.users.getByUsername({ username }),
      octokit.repos.listForUser({ username }),
    ]);

    const totalStars = repos.data.reduce(
      (acc, repo) => acc + repo.stargazers_count,
      0
    );

    const totalForks = repos.data.reduce(
      (acc, repo) => acc + repo.forks_count,
      0
    );

    return {
      totalRepos: user.data.public_repos,
      followers: user.data.followers,
      following: user.data.following,
      totalStars,
      totalForks,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return {
      totalRepos: 0,
      followers: 0,
      following: 0,
      totalStars: 0,
      totalForks: 0,
    };
  }
}
