import "@/app/_styles/globals.css";
import { Manrope } from "next/font/google";

export const metadata = {
  title: "Frontend Intern",
};

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-primary min-h-screen `}>
        {children}
      </body>
    </html>
  );
}
