
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import About from "./About/page";
import Landing from "./Landing/page";
import Roadmap from "./Roadmap/page";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Landing/>
    <Roadmap/>
    <About/>
    <Footer/>
    </>
  );
}
