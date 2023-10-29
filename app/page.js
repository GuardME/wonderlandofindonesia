import Image from 'next/image'
import React from "react"
import { Frames, Sound } from './components'


export default function Home() {
  return (
    
    <main className="w-full h-full fixed perspective">
      

      <section className="h-full transform-3d">
        <Frames />
      </section>
      <Sound />
    </main>
  )
}
