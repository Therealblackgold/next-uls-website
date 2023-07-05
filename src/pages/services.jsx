import BackToTop from "@/components/BackToTop";
import AnimatePage from "../components/AnimatePage";
import Header from "../components/Header";
import List from "../components/List";
import VipList from "../components/VipList";
import SiteHead from "../components/SiteHead";

const Services = () => {
  return (
    <AnimatePage>
      <SiteHead />
      <Header />
      <List />
      <VipList />
      <BackToTop />
    </AnimatePage>
  );
};

export default Services;
