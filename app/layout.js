import "@/app/__styles/globals.css";
import Logo from "./__components/Logo";
import Navigation from "./__components/Navigation";

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
      <body className="bg-primary-950 text-primary-100">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>&copy; by the Wild Oasis</footer>
      </body>
    </html>
  );
}

export default RootLaout;
