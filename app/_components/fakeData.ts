export interface NewsArticle {
  title: string;
  url: string;
}

export interface Contribution {
  user: string;
  action: string;
  date: string;
}

export interface ProgressData {
  date: string;
  co2Saved: number;
}

export const fetchFakeContributions = async (): Promise<Contribution[]> => {
  return [
    { user: "Alice", action: "Recycled plastic bottles", date: "2024-07-01" },
    { user: "Bob", action: "Used public transport", date: "2024-07-02" },
    { user: "Charlie", action: "Installed solar panels", date: "2024-07-03" },
    { user: "Dana", action: "Planted trees", date: "2024-07-04" },
    { user: "Eve", action: "Reduced water usage", date: "2024-07-05" },
    { user: "Frank", action: "Used a reusable bag", date: "2024-07-06" },
    { user: "Grace", action: "Composted food waste", date: "2024-07-07" },
    {
      user: "Hank",
      action: "Participated in a beach clean-up",
      date: "2024-07-08",
    },
    { user: "Ivy", action: "Bought local produce", date: "2024-07-09" },
    {
      user: "Jack",
      action: "Rode a bike instead of driving",
      date: "2024-07-10",
    },
    { user: "Alice", action: "Recycled glass bottles", date: "2024-07-11" },
    { user: "Bob", action: "Used carpooling", date: "2024-07-12" },
    {
      user: "Charlie",
      action: "Installed energy-efficient lighting",
      date: "2024-07-13",
    },
    { user: "Dana", action: "Grew a vegetable garden", date: "2024-07-14" },
    { user: "Eve", action: "Collected rainwater", date: "2024-07-15" },
    { user: "Frank", action: "Used public transport", date: "2024-07-16" },
    {
      user: "Grace",
      action: "Avoided single-use plastics",
      date: "2024-07-17",
    },
    {
      user: "Hank",
      action: "Attended a sustainability workshop",
      date: "2024-07-18",
    },
    { user: "Ivy", action: "Used a reusable water bottle", date: "2024-07-19" },
    {
      user: "Jack",
      action: "Participated in a tree-planting event",
      date: "2024-07-20",
    },
  ];
};

export const fetchFakeProgressData = async (): Promise<ProgressData[]> => {
  return [
    { date: "2024-07-01", co2Saved: 50 },
    { date: "2024-07-02", co2Saved: 35 },
    { date: "2024-07-03", co2Saved: 28 },
    { date: "2024-07-04", co2Saved: 41 },
    { date: "2024-07-05", co2Saved: 32 },
    { date: "2024-07-06", co2Saved: 39 },
    { date: "2024-07-07", co2Saved: 51 },
    { date: "2024-07-08", co2Saved: 57 },
    { date: "2024-07-09", co2Saved: 45 },
    { date: "2024-07-10", co2Saved: 39 },
    { date: "2024-07-11", co2Saved: 48 },
    { date: "2024-07-12", co2Saved: 43 },
    { date: "2024-07-13", co2Saved: 57 },
    { date: "2024-07-14", co2Saved: 62 },
    { date: "2024-07-15", co2Saved: 65 },
    { date: "2024-07-16", co2Saved: 73 },
    { date: "2024-07-17", co2Saved: 78 },
    { date: "2024-07-18", co2Saved: 69 },
    { date: "2024-07-19", co2Saved: 65 },
    { date: "2024-07-20", co2Saved: 72 },
  ];
};

export const fetchFakeTotalImpact = async () => {
  return {
    totalCO2Saved: 5000,
    totalEnergySaved: 2000,
    totalWaterSaved: 15000,
  };
};
