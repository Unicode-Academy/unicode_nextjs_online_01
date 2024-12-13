import BestSeller from "./BestSeller/BestSeller";
import CallToAction from "./CallToAction/CallToAction";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import Services from "./Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Products />
      <Services />
      <CallToAction />
      <BestSeller />
    </>
  );
}
