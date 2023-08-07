import { Element } from "react-scroll";
import BgPronto from "../BgPronto";
import Appointment from "../Common/Appointment";
import CustomerReview from "../Common/CustomerReview";
import OurClients from "../Common/OurClients";
import Layout from "../Layout/Index";
import Futuro from "./Futuro";
import HeroMob from "./HeroMob";
import Immergiti from "./Immergiti";
import MainCom from "./MainCom";
import PercheCards from "./PercheCards";
import RequestDemoForm from "./RequestDemoForm";
import Vedio from "./Vedio";

const Index = () => {
  return (
    <Layout>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <MainCom />
      <OurClients />
      <HeroMob />
      <PercheCards />
      <Futuro />
      <Vedio />
      <Immergiti />
      <BgPronto />
      <Element name="form">
        <RequestDemoForm />
      </Element>
    </Layout>
  );
};

export default Index;
