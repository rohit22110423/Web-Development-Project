import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Freebook from "../Components/Freebook";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="pt-24"> {/* Added padding for fixed navbar */}
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </div>
  );
}


export default Home;
