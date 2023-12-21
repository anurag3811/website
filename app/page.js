import Image from 'next/image'
import logo from '../public/logo.png'
export default function Home() {
  return (
    <>
      <div className='flex justify-center pt-8'>                                              {/* Nav */}
      <div className='flex items-center md:flex-row flex-col'>                                                     {/* Image + Hypercubes.in */}
      <div className=' inline-flex'><Image src={logo} width={72} height={72}></Image></div>   {/* Image */}
      <div className='text-3xl lg:text-5xl inline-flex font-bold ml-2'>Hypercubes.in</div>    {/* Hypercubes.in */}
      </div>
      </div>
      <div className='flex justify-center'><div className=' py-4'>Coming soon</div></div>
    </>
  )
}
