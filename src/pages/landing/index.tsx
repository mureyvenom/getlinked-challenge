import Layout from "../../components/Layout";
import Banner from "./banner";
import BigIdea from "./big-idea";
import Rules from "./rules";
import Criteria from "./criteria";
import Faqs from "./faqs";
import Timeline from "./timeline";
import Prizes from "./prizes";
import Partners from "./partners";
import Privacy from "./privacy";
import { RouteComponentProps } from "react-router";
import { useEffect, useRef } from "react";
import Footer from "./footer";

const Landing = ({ location }: RouteComponentProps) => {
  const faqsref = useRef<HTMLDivElement>(null);
  const overviewref = useRef<HTMLDivElement>(null);
  const timelineref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.pathname === "/faqs") {
      faqsref.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (location.pathname === "/timeline") {
      timelineref.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (location.pathname === "/overview") {
      overviewref.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <Layout>
      <div className="border-b-[1px] opacity-[0.18]"></div>
      <Banner />
      <BigIdea ref={overviewref} />
      <Rules />
      <Criteria />
      <Faqs ref={faqsref} />
      <Timeline ref={timelineref} />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </Layout>
  );
};

export default Landing;
