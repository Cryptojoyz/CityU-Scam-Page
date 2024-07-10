import React from 'react'
import Navbar from "@/components/Navbar";
import {Maintitle} from "@/components/Maintitle";
import Image from 'next/image';
import { fetchMethod } from '@/lib/fetchcontent';
import ReactMarkdown from 'react-markdown';
import {ContactUs} from "@/components/ContactUs.jsx";
import methopic from '/public/methodology.png';

const data = await fetchMethod();

const MethodologyPage = () => {
  return (
    <>
      <Navbar />
      <Maintitle />
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

      <ContactUs />
    </>
  )
}

export default MethodologyPage