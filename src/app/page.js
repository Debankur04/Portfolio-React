
import About from "./Components/About";
import BlackHole from "./Components/BlackHole";
import Contacts from "./Components/Contacts";
import ContactUs from "./Components/ContactUs";
import IconsPlace from "./Components/IconsPlace";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Seemorebtn from "./Components/Seemorebtn";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <BlackHole/>
      <About/>
      <div className="bg-black">
        <div className="flex justify-center text-white text-5xl">Projects</div>
        <div className="flex justify-evenly my-4">
          <Projects/>
          <Projects/>
        </div>
        <div className="flex justify-evenly">
          <Projects/>
          <Projects/>
        </div>
        <div className="flex justify-center">
          <Seemorebtn/>
        </div>
      </div>
      <Contacts/>

    </div>
  );
}
