
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { getCompany, getProjects } from "@/sanity/actions";
export const revalidate = 60;
export default async function Home() {
  const project = await getProjects();
  const company = await getCompany();
  return (
    <main className="flex relative bg-black-100 flex-col items-center justify-between sm:px-10 px-5 mx-auto overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects projects={project} />
        <Clients company={company} />
        <Experience />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
