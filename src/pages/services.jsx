import BackToTop from "@/components/BackToTop";
import AnimatePage from "../components/AnimatePage";
import Header from "../components/Header";
import List from "../components/List";
import VipList from "../components/VipList";

const Services = () => {
  return (
    <AnimatePage>
      <Header />
      <List />
      <VipList />
      <BackToTop />
    </AnimatePage>
  );
};

export default Services;
