// components/RecentContributions.tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

interface Contribution {
  user: string;
  action: string;
  date: string;
}

interface RecentContributionsProps {
  contributions: Contribution[];
}

const RecentContributions: React.FC<RecentContributionsProps> = ({
  contributions,
}) => (
  <Card className="recent-contributions">
    <CardHeader>
      <CardTitle>Recent User Contributions</CardTitle>
    </CardHeader>
    <CardContent>
      <ul>
        {contributions.map((contribution, index) => (
          <li key={index}>
            <strong>{contribution.user}</strong> {contribution.action} on{" "}
            {contribution.date}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default RecentContributions;
