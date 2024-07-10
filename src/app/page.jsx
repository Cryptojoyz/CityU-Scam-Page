import Navbar from "@/components/Navbar";
import {Maintitle} from "@/components/Maintitle";
import Menubar from "@/components/Menubar";
import { fetchanalysis, fetchcontent } from "@/lib/fetchcontent";
import {ContactUs} from "@/components/ContactUs.jsx";

const analysisData = await fetchanalysis();
const typicalcase = await fetchcontent();

export default function Home() {
  return (
    <main>
      <Navbar />
      <Maintitle />
      <Menubar analysisData={analysisData}  typicalcase={typicalcase}/>
      <ContactUs />
    </main>
  );
}
