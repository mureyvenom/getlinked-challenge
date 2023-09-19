import Layout from "../../components/Layout";
import Banner from "./banner";
import BigIdea from "./big-idea";
import Rules from "./rules";
import Criteria from "./criteria";
import Faqs from "./faqs";
import Timeline from "./timeline";

const Landing = () => {
  return (
    <Layout>
      <Banner />
      <BigIdea />
      <Rules />
      <Criteria />
      <Faqs />
      <Timeline />
    </Layout>
  );
};

export default Landing;
