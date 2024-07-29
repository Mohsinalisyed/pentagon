import MintButton from "@/components/MintButton";
import Header from "../components/Header";

const HomePage: React.FC = () => (
  <div>
    <Header />
    <div
      style={{ backgroundImage: "url('/PentagonUpdated.svg')" }}
      className="bg-cover bg-center bg-no-repeat w-full h-screen flex items-center justify-center relative"
    >
      <MintButton />
    </div>
  </div>
);

export default HomePage;
