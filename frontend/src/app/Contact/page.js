import React from "react";
import ContactUsForm from "./form";
import { countries } from "../utils";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <ContactUsForm data={countries} />
    </div>
  );
}
