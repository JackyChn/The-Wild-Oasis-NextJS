import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>Welcome to Wild Oasis</h1>

      <Link href="/cabins">Explore luxur cabins</Link>
    </div>
  );
}
