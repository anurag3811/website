import Image from 'next/image'
import h from '../public/Hypercubes.png'


export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <div className='flex flex-col lg:flex-row items-center justify-center pt-16'>
      <div className=' inline-flex'>
      <Image src={h} width={200} height={200}></Image></div>
      <div className='text-5xl lg:text-7xl inline-flex font-bold'>Hypercubes.in</div>
      </div>
      <div className=' py-4'>_ _ _ Coming soon _ _ _</div>
    </main>
  )
}
