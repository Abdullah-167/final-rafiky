import OurClients from "../Common/OurClients";
import Pronto from "../Pronto";
import Cosa from "./Cosa";
import Hero from "./Hero";
import Vantaggi from "./Vantaggi";
const Index = () => {
  return (
    <div>
      <Hero />
      <OurClients />
      <Cosa />
      <Vantaggi />
      {/* <Vedio /> */}
      <Pronto />
    </div>
  );
};

export default Index;
