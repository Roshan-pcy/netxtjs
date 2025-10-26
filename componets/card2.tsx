import React from 'react'

type Props={
    children:React.ReactNode;
    hight?:string;
    width?:string;
    className?:string;
}

export default function card2( {children,width="w-[400px]" , className , hight="w-[500px]"}:Props) {
  return (
    <div className={`${className} bg-pink-50 ${hight} ${width}`}>{children}</div>
  )
}
