import Audiobooks from "@/Components/AudioBooks/audiobooks";
import Footer from "@/Components/common/Footer";
import Header from "@/Components/common/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Audiobooks />
      <Footer />
    </div>
  );
};

export default page;
