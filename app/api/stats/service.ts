const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function getGithubContributionStats(username: string) {
  const endpoint = "https://api.github.com/graphql";

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
          pullRequestContributions {
            totalCount
          }
          issueContributions {
            totalCount
          }
        }
        repositories(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
          nodes {
            stargazerCount
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  `;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();

  if (!json.data) throw new Error("GitHub GraphQL API failed");

  const user = json.data.user;

  const commitCount =
    user.contributionsCollection.contributionCalendar.totalContributions;
  const prCount =
    user.contributionsCollection.pullRequestContributions.totalCount;

  const stars = user.repositories.nodes.reduce(
    (sum: number, repo: any) => sum + repo.stargazerCount,
    0
  );

  const issueCount = user.contributionsCollection.issueContributions.totalCount;

  const langCount: Record<string, number> = {};
  user.repositories.nodes.forEach((repo: any) => {
    const lang = repo.primaryLanguage?.name;
    if (lang) langCount[lang] = (langCount[lang] || 0) + 1;
  });
  const topLang =
    Object.entries(langCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "Unknown";

  return { commitCount, prCount, stars, topLang, issueCount };
}