"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getSession, signInAction } from "../_lib/actions";
import { checkAndCreateUserProfile } from "../_services/data-service";

function SignInButton() {
  const router = useRouter();

  useEffect(() => {
    const checkProfile = async () => {
      const session = await getSession();
      const userId: string | null | undefined = session?.user?.uid;
      if (userId) {
        await checkAndCreateUserProfile(userId);
        router.push("/account");
      }
    };
    checkProfile();
  }, [router]);

  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
