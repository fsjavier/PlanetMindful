// components/TotalImpact.tsx
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

interface TotalImpactProps {
  totalCO2Saved: number;
  totalEnergySaved: number;
  totalWaterSaved: number;
}

const TotalImpact: React.FC<TotalImpactProps> = ({
  totalCO2Saved,
  totalEnergySaved,
  totalWaterSaved,
}) => (
  <Card className="col-span-1 md:col-span-2 lg:col-span-3 text-center">
    <CardHeader>
      <CardTitle>Total Community Impact</CardTitle>
    </CardHeader>
    <CardContent className="grid sm:grid-cols-3 xs:grid-cols-1 gap-2">
      <Card>
        <CardHeader>
          <CardTitle>Total CO2 Saved</CardTitle>
        </CardHeader>
        <CardContent>{totalCO2Saved} kg</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Energy Saved</CardTitle>
        </CardHeader>
        <CardContent>{totalEnergySaved} kWh</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Water Saved</CardTitle>
        </CardHeader>
        <CardContent>{totalWaterSaved} l</CardContent>
      </Card>
    </CardContent>
  </Card>
);

export default TotalImpact;
