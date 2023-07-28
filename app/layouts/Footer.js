import Link from 'next/link'
import Image from 'next/image'
import Button from '@/app/components/Button'

import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function Footer () {
    return (
        <footer className='relative bg-secondary text-primary w-full rounded-t-5xl'>
          <Link href="#" className='aspect-square w-20 h-20 bg-primary flex items-center justify-center rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 group'>
            <ArrowUpIcon className='text-white h-6 w-6 transition-transform duration-150 group-hover:-translate-y-2'></ArrowUpIcon>
          </Link>
          <div className='container py-20 flex flex-col lg:flex-row lg:justify-normal items-center text-xl gap-8 sm:gap-12'>
            <Link href="/" className='relative w-40 h-20 lg:mr-auto'>
              <Image src='/keurwin-logo.svg' fill={true}/>
            </Link>
            <ul className='flex flex-col sm:flex-row items-center gap-8 sm:gap-12'>
              <li>
                <Link href='/over-ons/'>Over ons</Link>
              </li>
              <li>
                <Link href='/diensten/'>Diensten</Link>
              </li>
              <li>
                <Link href='/referenties/'>Referenties</Link>
              </li>
            </ul>
            <Button link='/contact/' className='text-lg' type='white'>Neem contact op</Button>
          </div>
          <div className='container'>
            <div className='h-px w-full bg-black/10'></div>
          </div>
          <div className='container py-10 text-sm flex flex-col sm:flex-row justify-between items-center gap-6'>
            <ul className='flex items-center gap-8'>
              <li>
                <Link href='/privacybeleid/'>Privacybeleid</Link>
              </li>
              <li>
                <Link href='/cookies/'>Cookies</Link>
              </li>
            </ul>
            <a href="https://zekerzichtbaar.nl/">Realisatie door Zeker Zichtbaar</a>
          </div>
        </footer>
    )
}
