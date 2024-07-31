// components/TotalImpact.tsx
import { Card, CardHeader, CardTitle, CardContent } from "./Card";
import ProgressChart from "./ProgressChart";
import { ProgressData } from "./fakeData";

interface TotalImpactProps {
  data: ProgressData[];
}

const CardChart: React.FC<TotalImpactProps> = ({ data }) => (
  <Card className="col-span-1 lg:col-span-2">
    <CardHeader>
      <CardTitle>Daily CO2 Savings</CardTitle>
    </CardHeader>
    <CardContent>
      <ProgressChart data={data} />
    </CardContent>
  </Card>
);

export default CardChart;
