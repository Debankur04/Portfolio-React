
import About from "./Components/About";
import BlackHole from "./Components/BlackHole";
import Contacts from "./Components/Contacts";
import Navbar from "./Components/Navbar";
import ProjectHeading from "./Components/ProjectHeading";
import Projects from "./Components/Projects";
import Seemorebtn from "./Components/Seemorebtn";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <BlackHole/>
      <div className="">
        <About/>
      </div>
      <div className="bg-black py-12">
        <ProjectHeading/>
        <div className="flex justify-evenly my-8">
          <Projects/>
          <Projects/>
        </div>
        <div className="flex justify-evenly my-8">
          <Projects/>
          <Projects/>
        </div>
        <div className="flex justify-center my-12">
          <Seemorebtn/>
        </div>
      </div>
      <Contacts/>

    </div>
  );
}
