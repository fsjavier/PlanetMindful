import { NewsArticle } from "../_services/api";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

interface climateNewsProps {
  climateNews: NewsArticle[];
}

const ClimateNews: React.FC<climateNewsProps> = ({ climateNews }) => {
  return (
    <Card className="col-span-1 lg:col-span-3 text-center">
      <CardHeader>
        <CardTitle>Climate News</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4 rounded shadow-box">
          {climateNews.length > 0 ? (
            <div className="news-ticker">
              <ul className="news-ticker-wrapper">
                {climateNews.map((news: NewsArticle, index: number) => (
                  <li key={index} className="news-item px-16">
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      <p>{news.title}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClimateNews;
