import Content from "./components/Home/Content";
import ContactUsFrom from "./components/Home/Form";
import Template from "./components/Home/Template";
import Whyus from "./components/Home/Whyus";
import { countries } from "./utils";
export default async function Home() {

  return(
    <div className="max-w-7xl mx-auto">
      <Content />
      <hr className="border-t-2 border-dotted border-gray-400 my-4" />
      <Template />
      <Whyus />
      <ContactUsFrom data={countries} />
    </div>
  )
}