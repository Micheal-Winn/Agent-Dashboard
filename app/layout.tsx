import React from "react";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { ReactQueryProvider } from "./ReactQueryProvider";
import Provider from "./provider";
import Sidebar from "@/components/Sidebar/sidebar";



const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={poppins.className} style={{overflow:"hidden"}}>
          <Provider>
            <main className="flex h-screen min-[2000px]:container overflow-hidden">
              <Sidebar/>
              <section className='w-full overflow-hidden'>
                {children}
              </section>
            </main>
          </Provider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
