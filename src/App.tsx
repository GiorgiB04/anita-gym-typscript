import Navbar from "@/scenes/navbar/index";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import AboutMe from "@/scenes/aboutMe";
import Programs from "@/scenes/programs";
import Contact from "@/scenes/contact";
import Footer from "@/scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <AboutMe setSelectedPage={setSelectedPage} />
        <Programs setSelectedPage={setSelectedPage} />
        <Contact setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </>
  );
}

export default App;
