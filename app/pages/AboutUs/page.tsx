import Aboutus from "@/Components/AboutUs/aboutus";
import CategoryBar from "@/Components/common/CategoryBar";
import Footer from "@/Components/common/Footer";
import Header from "@/Components/common/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <CategoryBar/>
      <Aboutus />
      <Footer />
    </div>
  );
};

export default page;
