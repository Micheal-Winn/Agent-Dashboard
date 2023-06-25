import React from "react";
import Header from "@/components/Header/Header";

const ProfileRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen overflow-y-scroll">
      <Header />
      {children}
    </main>
  );
};

export default ProfileRootLayout;
