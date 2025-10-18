"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>Not logged in</div>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        {session?.user?.image && (
          <img
            src={session.user.image}
            alt={session.user.name || "Profile"}
            className="h-10 w-10 rounded-full"
          />
        )}
        <div>
          <p className="font-medium">{session?.user?.name}</p>
          <p className="text-sm text-gray-500">{session?.user?.email}</p>
        </div>
      </div>
      <Button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="mt-4"
        variant="outline"
      >
        Sign Out
      </Button>
    </div>
  );
}