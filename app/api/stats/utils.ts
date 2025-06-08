export const getQueryParams = (url: string): Record<string, string> => {
  const params = new URL(url).searchParams;
  const result: Record<string, string> = {};
  for (const [key, val] of params.entries()) result[key] = val;
  return result;
};

export function getPowerLevel(count: number) {
  if (count >= 9000) return "God Mode";
  if (count >= 4000) return "Super Saiyan";
  if (count >= 2000) return "Sage Mode";
  if (count >= 1000) return "Elite Class";
  if (count >= 500) return "Ninja V";
  if (count >= 100) return "Adventurer U";
  return "Beginner";
}

export function getCommitRank(count: number) {
  if (count >= 10000) return "Top 0.1%";
  if (count >= 5000) return "Top 0.5%";
  if (count >= 2000) return "Top 1%";
  if (count >= 1000) return "Top 2%";
  if (count >= 500) return "Top 5%";
  if (count >= 200) return "Top 20%";
  if (count >= 50) return "Top 50%";
  return "Top 80%";
}
