import Image from 'next/image'
import Button from '@/app/components/Button'

export default function Home() {
  return (
    <main>
      <Image
        src="/logo.svg"
        alt="Vercel Logo"
        className=""
        width={100}
        height={24}
        priority
      />
    </main>
  )
}
