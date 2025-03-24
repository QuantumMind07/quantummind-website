import Content from "./components/Home/Content";
import ContactUsFrom from "./components/Home/Form";
import Template from "./components/Home/Template";
import Whyus from "./components/Home/Whyus";
import Particles from "./components/Particles/Particles";

export default async function Home() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();
  return(
    <div className="max-w-7xl mx-auto">
      <Content />
      <hr className="border-t-2 border-dotted border-gray-400 my-4" />
      <Whyus />
      <Template />
      <Particles/>
      <ContactUsFrom data={countries} />
    </div>
  )
}