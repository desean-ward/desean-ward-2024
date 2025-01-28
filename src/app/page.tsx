// import Grid from "@/components/grid/grid.component";
import Hero from "@/components/hero/hero.component";
import Projects from "@/components/projects/projects.component";
import { FloatingNav } from "@/components/ui/floating-nav.ui";
import { navItems } from "../../data";
import Collegues from "@/components/colleagues/colleagues.component";
import Experience from "@/components/experience/experience.component";
import MyApproach from "@/components/my-approach/my-approach.component";
import Footer from "@/components/footer/footer.component";

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-cole mx-auto sm:px-10 px-5 overflow-clip'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Grid /> */}
        <Projects />
        <Collegues />
        <Experience />
        <MyApproach />
        <Footer />
      </div>
    </main>
  );
}
