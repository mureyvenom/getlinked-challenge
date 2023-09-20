import Layout from "../../components/Layout";
import Banner from "./banner";
import BigIdea from "./big-idea";
import Rules from "./rules";
import Criteria from "./criteria";
import Faqs from "./faqs";
import Timeline from "./timeline";
import Prizes from "./prizes";
import Partners from "./partners";

const Landing = () => {
  return (
    <Layout>
      <Banner />
      <BigIdea />
      <Rules />
      <Criteria />
      <Faqs />
      <Timeline />
      <Prizes />
      <Partners />
    </Layout>
  );
};

export default Landing;
