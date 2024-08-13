import React from 'react';
import Navbarzh from "@/components/Navbarzh";
import {Maintitlezh} from "@/components/Maintitle";
import { fetchanalysiszh, fetchcontentzh } from "@/lib/fetchcontent";
import {ContactUszh} from "@/components/ContactUs.jsx";
import Menubarzh from "@/components/Menubarzh";


export default async function Chinese () {

  const analysisData = await fetchanalysiszh();
  const typicalcase = await fetchcontentzh();
  return (
    <div>
    <Navbarzh />
    <Maintitlezh />
    <Menubarzh analysisData={analysisData}  typicalcase={typicalcase}/>
    <ContactUszh />
    </div>
  )
}
