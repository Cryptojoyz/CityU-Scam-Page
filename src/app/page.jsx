import Navbar from "@/components/Navbar";
import dynamic from 'next/dynamic';
import {Maintitle} from "@/components/Maintitle";
// import Menubar from "@/components/Menubar";
import { fetchanalysis, fetchcontent } from "@/lib/fetchcontent";
import {ContactUs} from "@/components/ContactUs.jsx";
import Loading from '@/components/loading';

// 动态导入 Menubar 组件，并在加载期间显示 Loading 组件
const Menubar = dynamic(() => import('@/components/Menubar'), {
  loading: () => <Loading />,
  ssr: false, 
});

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
