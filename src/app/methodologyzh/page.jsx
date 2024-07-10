import React from 'react'
import Navbarzh from "@/components/Navbarzh";
import {Maintitlezh} from "@/components/Maintitle";;
import Image from 'next/image';
import { fetchMethodzh } from '@/lib/fetchcontent';
import ReactMarkdown from 'react-markdown'
import {ContactUszh} from "@/components/ContactUs.jsx";
import methopic from '/public/methodologyzh.png';

const data = await fetchMethodzh();

const MethodologyPage = () => {
  return (
    <>
      <Navbarzh />
      <Maintitlezh />
      <div className="flex flex-col items-center justify-center pt-4">
        <div className="max-w-[1000px] h-auto">
          <Image
            src={methopic}
            alt="Methodology"
            placeholder='blur'
          />
        </div>
        <div className='prose'>
          <ReactMarkdown>{data}</ReactMarkdown>
        </div>
      </div>

      <ContactUszh />

    </>
  )
}

export default MethodologyPage