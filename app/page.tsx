import { fetchClimateNews, NewsArticle } from "./_services/api";
import {
  fetchFakeContributions,
  fetchFakeProgressData,
  fetchFakeTotalImpact,
  Contribution,
  ProgressData,
} from "./_components/fakeData";
import RecentContributions from "./_components/RecentContributions";
import TopContributors from "./_components/TopContributors";
import TotalImpact from "./_components/TotalImpact";
import CardChart from "./_components/CardChart";
import ClimateNews from "./_components/ClimateNews";
import PageHeader from "./_components/PageHeader";

export default async function HomePage() {
  const climateNews: NewsArticle[] = await fetchClimateNews();
  const duplicatedNews = [...climateNews, ...climateNews];
  const { totalCO2Saved, totalEnergySaved, totalWaterSaved } =
    await fetchFakeTotalImpact();
  const contributions: Contribution[] = await fetchFakeContributions();
  const progressData: ProgressData[] = await fetchFakeProgressData();

  return (
    <main className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
      <PageHeader>Planet Mindful</PageHeader>
      <TotalImpact
        totalCO2Saved={totalCO2Saved}
        totalEnergySaved={totalEnergySaved}
        totalWaterSaved={totalWaterSaved}
      />
      <CardChart data={progressData} />
      <TopContributors contributions={contributions} />
      <RecentContributions contributions={contributions} />
      <ClimateNews climateNews={duplicatedNews} />
    </main>
  );
}
