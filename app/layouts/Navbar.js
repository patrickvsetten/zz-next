import Link from 'next/link'
import Image from 'next/Image'

import Dropdown from '@/app/components/Dropdown';
import Button from '@/app/components/Button'

export default function Navbar () {
    return (
        <nav className='absolute top-12 inset-x-0 py-4 bg-transparent z-50 flex items-center border-b border-white/[0.1]'>
          <div className='container'>
            <div className='grid md:grid-cols-2 gap-x-8'>
              <div className='flex items-center space-x-12'>
                <Link href="/" className='relative w-40 h-20'>
                  <Image src='/keurwin-logo-white.svg' fill={true}/>
                </Link>
                <div className='w-px h-4 bg-secondary'></div>
                <ul className='navbar flex flex-col sm:flex-row items-center gap-8 sm:gap-12 text-white'>
                  <li>
                    <Link href='/over-ons/'>Over ons</Link>
                  </li>
                  <li className='relative'>
                    <Dropdown 
                      parent="Diensten"
                      listItems={[
                        {name: 'NEN1010', link: '/diensten/nen1010'}, 
                        {name: 'NEN3140', link: '/diensten/nen1010'}, 
                        {name: 'NEN-EN 50110-1', link: '/diensten/nen1010'}, 
                        {name: 'NEN1010', link: '/diensten/nen1010'},
                        {name: 'NEN3140', link: '/diensten/nen1010'}, 
                        {name: 'NEN-EN 50110-1', link: '/diensten/nen1010'}, 
                      ]} 
                    />
                  </li>
                  <li>
                    <Link href='/referenties'>Referenties</Link>
                  </li>
                </ul>
              </div>
              <div className='flex justify-end items-center text-white space-x-6'>
                <Button 
                  link="/contact" 
                  type="secondary"
                >
                  Neem contact op
                </Button>
              </div>
            </div>
          </div>
        </nav>
    )
}