import React from 'react'
import Navbar from "@/components/Navbar";
import {Maintitle} from "@/components/Maintitle";
import Image from 'next/image';
import { fetchMethod } from '@/lib/fetchcontent';
import ReactMarkdown from 'react-markdown';
import {ContactUs} from "@/components/ContactUs.jsx";

const data = await fetchMethod();

const MethodologyPage = () => {
  return (
    <>
      <Navbar />
      <Maintitle />
      <div className="flex flex-col items-center justify-center pt-4">
        <Image
          className="w-auto h-auto"
          src="/methodology.png"
          alt="Methodology"
          width={800}
          height={600}
        />
        <div className='prose'>
          <ReactMarkdown>{data}</ReactMarkdown>
        </div>
      </div>

      <ContactUs />
    </>
  )
}

export default MethodologyPage