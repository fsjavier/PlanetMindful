import ProfileContent from "@/app/_components/ProfileContent";
import { auth } from "@/app/_lib/auth";
import { getProfile } from "@/app/_services/data-service";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata({ params }: Params) {
  const { name } = await getProfile(params.uid);
  return { title: `${name} profile` };
}

interface UserPageProps {
  params: {
    uid: string;
  };
}

export default async function ProfilePage({ params }: UserPageProps) {
  const { uid } = params;
  const session = await auth();
  const userId = session?.user?.uid;
  const profile = await getProfile(uid);

  if (!profile) {
    return <p className="text-center text-lg mt-8">User not found.</p>;
  }

  return <ProfileContent initialProfile={profile} userId={userId} />;
}
