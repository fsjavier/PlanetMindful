// components/TopContributors.tsx
import { Contribution } from "./fakeData";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

interface TopContributorsProps {
  contributions: Contribution[];
}

const TopContributors: React.FC<TopContributorsProps> = ({ contributions }) => {
  const topContributors = Object.entries(
    contributions.reduce((acc, { user }) => {
      acc[user] = (acc[user] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  )
    .map(([user, totalActions]) => ({ user, totalActions }))
    .sort((a, b) => b.totalActions - a.totalActions)
    .slice(0, 5);

  return (
    <Card className="top-contributors">
      <CardHeader>
        <CardTitle>Top Contributors</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {topContributors.map((contributor, index) => (
            <li key={index}>
              <strong>{contributor.user}</strong> - {contributor.totalActions}{" "}
              actions
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TopContributors;
