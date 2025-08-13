import { Navbar } from "@/components/navbar/Navbar";
import { Services } from "@/components/services/Services";

export default function Home() {
  return (
    <div className="bg-neutral-900 w-screen h-screen text-white">
      <Navbar />
      <Services />
    </div>
  );
}
