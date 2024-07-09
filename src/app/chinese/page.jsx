import React from 'react'
import dynamic from 'next/dynamic';
import Navbarzh from "@/components/Navbarzh";
import {Maintitlezh} from "@/components/Maintitle";
import { fetchanalysiszh, fetchcontentzh } from "@/lib/fetchcontent";
import {ContactUszh} from "@/components/ContactUs.jsx";
import Menubarzh from "@/components/Menubarzh";
// import Loading from '@/components/loading';

// 动态导入 Menubar 组件，并在加载期间显示 Loading 组件
// const Menubarzh = dynamic(() => import('@/components/Menubarzh'), {
//   loading: () => <Loading />,
//   ssr: false, 
// });

const analysisData = await fetchanalysiszh();
const typicalcase = await fetchcontentzh();

export default function Chinese () {
  return (
    <div>
    <Navbarzh />
    <Maintitlezh />
    <Menubarzh analysisData={analysisData}  typicalcase={typicalcase}/>
    <ContactUszh />
    </div>
  )
}
