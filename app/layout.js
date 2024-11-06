import "@/app/_styles/globals.css";
import { Manrope } from "next/font/google";

export const metadata = {
  title: "Frontend Intern", //web sayfasi title
};

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-primary min-h-screen`}>
        {children}
        <main className="w-52 h-52 bg-red-600">sdfsdfkjdsnfkjsdfn</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
