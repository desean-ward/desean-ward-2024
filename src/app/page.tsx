import Grid from "@/components/grid/grid.component";
import Hero from "@/components/hero/hero.component";
import Projects from "@/components/projects/projects.component";
import { FloatingNav } from "@/components/ui/floating-nav.ui";
import { navItems } from "../../data";
import Collegues from "@/components/colleagues/colleagues.component";
import Experience from "@/components/experience/experience.component";
import MyApproach from "@/components/my-approach/my-approach.component";

export default function Home() {
  return (
    <main className='relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px:-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Collegues />
        <Experience />
        <MyApproach />
      </div>
    </main>
  );
}
