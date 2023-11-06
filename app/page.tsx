import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>landing page</h1>
      <Link href="/about">about</Link>
      <br></br>
      <Link href="/form">form</Link>
      <br></br>
      <Link href="/table">table</Link>
      <br></br>
      <Link href="/sidebar">sidebar</Link>
    </>
  )
}
