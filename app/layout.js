import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomities, surrounded by beautiful mountains and dark forests",
};

function RootLaout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 text-primary-100 ${josefin.className} flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 p-12">
          <main className="max-w-7xl mx-auto bg-red-500">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLaout;
