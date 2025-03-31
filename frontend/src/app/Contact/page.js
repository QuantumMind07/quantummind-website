"use client";
import React, { useEffect, useState } from "react";
import ContactUsForm from "./form";

export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const formattedData = data.map((country) => ({
          name: country.name.common,
        }));
        setCountries(formattedData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }
    fetchCountries();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <ContactUsForm data={countries} />
    </div>
  );
}
