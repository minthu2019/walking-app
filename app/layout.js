import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Provider from "./Provider";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Walking App",
  description: "Image app with next js",
};

export default function RootLayout({ children ,session  }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider session={session}>
          <Provider>
            <NavBar/>
            {children}
          </Provider>
        </AuthProvider>
        </body>
    </html>
  );
}
