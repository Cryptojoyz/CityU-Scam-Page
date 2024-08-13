import Navbar from "@/components/Navbar";
import {Maintitle} from "@/components/Maintitle";
import Menubar from "@/components/Menubar";
import { fetchanalysis, fetchcontent } from "@/lib/fetchcontent";
import {ContactUs} from "@/components/ContactUs.jsx";


export default async function Home() {
  const analysisData = await fetchanalysis();
  const typicalcase = await fetchcontent();
  return (
    <main>
      <Navbar />
      <Maintitle />
      <Menubar analysisData={analysisData}  typicalcase={typicalcase}/>
      <ContactUs />
    </main>
  );
}
