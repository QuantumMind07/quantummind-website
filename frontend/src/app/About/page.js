'use client';

import React from 'react';
import Main from './main';

const page = () => {
  return (
    <div>
      {console.log("Form server")}
      <Main>
        <section className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            At Quantum Mind, we specialize in crafting innovative AI-driven tech solutions across diverse industries, including BFSI, E-commerce, Healthcare, and more. Our mission is to solve real-world challenges, drive business growth, and enhance ROI by implementing cutting-edge technology.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of experts is dedicated to pushing the boundaries of what’s possible, blending creativity with technology to empower businesses. We believe in the transformative power of AI to unlock potential, streamline processes, and create intelligent systems that drive meaningful outcomes.
          </p>
        </section>
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovative Solutions</h3>
            <p className="text-gray-600">Leveraging AI to solve complex business challenges and unlock new opportunities.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Diverse Industries</h3>
            <p className="text-gray-600">Serving BFSI, E-commerce, Healthcare, and beyond with tailored tech solutions.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Driving Growth</h3>
            <p className="text-gray-600">Boosting ROI and fostering innovation through AI-driven strategies.</p>
          </div>
        </section>
        <section className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Quantum Mind?</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            We prioritize understanding your business needs and delivering personalized solutions that align with your vision. From concept to deployment, our team works closely with you, ensuring transparency, agility, and impactful results.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us on a journey to harness the power of AI and create a smarter, more connected future.
          </p>
        </section>
      </Main>
    </div>
  );
}

export default page;
