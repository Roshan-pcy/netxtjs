'use client';

import React from 'react'

type Props={
    children:React.ReactNode;
    hight?:string;
    width?:string;
    className?:string;
}

export default function card({children,width="w-[400px]", hight="h-[400px]", className="" }:Props) {
  return (
    <div className={`${className} ${hight} ${width} flex justify-center items-center `}>
        {children}</div>
  )
}
