import { Octokit } from "@octokit/rest";

interface GithubStats {
  languages: { [key: string]: number };
  commits: Array<{
    repo: string;
    message: string;
    date: string;
  }>;
  monthlyCommits: number;
}

export async function getGithubStats(): Promise<GithubStats> {
  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN,
  });

  const username = "thiago-NSampaio";

  try {
    const { data: repos } = await octokit.repos.listForUser({ username });

    const languages: { [key: string]: number } = {};
    await Promise.all(
      repos.map(async (repo) => {
        const repoLanguages = await octokit.repos.listLanguages({
          owner: username,
          repo: repo.name,
        });

        Object.entries(repoLanguages.data).forEach(([lang, bytes]) => {
          languages[lang] = (languages[lang] || 0) + bytes;
        });
      })
    );

    // Buscar commits de todos os repositórios
    const currentDate = new Date();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );

    const commits: Array<{ repo: string; message: string; date: string }> = [];
    let monthlyCommits = 0;

    await Promise.all(
      repos.map(async (repo) => {
        try {
          const { data: repoCommits } = await octokit.repos.listCommits({
            owner: username,
            repo: repo.name,
            author: username,
            since: firstDayOfMonth.toISOString(),
          });

          monthlyCommits += repoCommits.length;

          commits.push(
            ...repoCommits.map((commit) => ({
              repo: repo.name,
              message: commit.commit.message,
              date: commit.commit.author?.date || "",
            }))
          );
        } catch (error) {
          console.warn(`Failed to fetch commits for ${repo.name}:`, error);
        }
      })
    );

    return {
      languages,
      commits,
      monthlyCommits,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return {
      languages: {},
      commits: [],
      monthlyCommits: 0,
    };
  }
}
