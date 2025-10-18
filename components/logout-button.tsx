"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const handleSignOut = async () => {
    // Clear any Google-specific cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    
    await signOut({ 
      callbackUrl: "/login",
      redirect: true
    });
  };

  return (
    <Button 
      onClick={handleSignOut}
      variant="outline"
      className="w-full"
    >
      Sign Out
    </Button>
  );
}