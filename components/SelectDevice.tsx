import Image from 'next/image'
import React from 'react'

export default function SelectDevice() {
  return (
    <div>
        <div className='flex justify-center'>
            <Image src="/icons/star.svg" alt='star' width={30} height={30} />
            <p className='mx-2 text-orange-400 text-sm'>SELECT YOUR DEVICE</p>
            <Image src="/icons/star.svg" alt='star' width={30} height={30} />
        </div>
        <h1 className='text-center my-3 mx-auto text-4xl font-bold lg:w-[500px]'>Top-Quality Repairs for Computer, Laptops, Phones</h1>
    </div>
  )
}
