import React from 'react'
import HeroBanner from './heroBanner'
import SecBanner from './heroBanner/secBanner'
import Sample from './heroBanner/sample'

export default function Home() {
  return (
    <main>
      <Sample/>
      <HeroBanner />
      <SecBanner />
    </main>
  )
}
