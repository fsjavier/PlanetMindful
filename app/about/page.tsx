import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/_components/Card";
import {
  LeafIcon,
  GlobeIcon,
  NewspaperIcon,
  UsersIcon,
  BookOpenIcon,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <div className="container mx-auto p-4 md:p-8">
        <Card className="bg-white shadow-box-lg rounded-lg overflow-hidden">
          <CardHeader className="bg-secondary-400 text-white p-6">
            <CardTitle className="text-3xl md:text-4xl font-bold">
              About Planet Mindful
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6 text-primary-500 leading-relaxed">
              Planet Mindful is a community-driven platform dedicated to raising
              awareness about climate change and empowering individuals to make
              a positive impact on the environment.
            </p>
            <p className="text-lg mb-8 text-primary-500 leading-relaxed">
              Our mission is to provide tools and resources that help users
              track their environmental contributions, stay informed about
              climate issues, and connect with like-minded individuals who are
              passionate about creating a sustainable future.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-secondary-600">
              Key Features:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: LeafIcon,
                  text: "Track personal CO2 savings and environmental contributions",
                },
                { icon: GlobeIcon, text: "View local and global climate data" },
                {
                  icon: NewspaperIcon,
                  text: "Stay updated with the latest climate news",
                },
                {
                  icon: UsersIcon,
                  text: "Connect with a community of environmentally conscious individuals",
                },
                {
                  icon: BookOpenIcon,
                  text: "Access resources for sustainable living",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <item.icon className="h-6 w-6 text-secondary-400 flex-shrink-0 mt-1" />
                  <span className="text-primary-400">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="bg-tertiary-50 p-6 rounded-lg shadow-box">
              <p className="text-xl text-center text-tertiary-700 font-semibold">
                Join us in our mission to create a more sustainable world, one
                action at a time!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
