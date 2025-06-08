import { NextResponse } from "next/server";
import { getQueryParams } from "./utils";
import { getSVG } from "./view";
import { getGithubContributionStats } from "./service";

export async function GET() {
  const user = process.env.GITHUB_USERNAME;

  if (!user) {
    return NextResponse.json(
      { error: "GITHUB_USERNAME environment variable is not set" },
      { status: 500 }
    );
  }

  try {
    const { commitCount, prCount, stars, topLang, issueCount } =
      await getGithubContributionStats(user);

    const svg = getSVG({
      stars,
      prCount,
      topLang,
      issueCount,
      commitCount,
    });

    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "GitHub fetch failed" },
      { status: 500 }
    );
  }
}
