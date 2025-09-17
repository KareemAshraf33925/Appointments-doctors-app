import React from 'react'
import { Button } from '@/components/ui/button'
function Hero() {
  return (
    // start-hero
    <section>
  <div className="mx-auto  max-w-screen-xl px-1 py-8 sm:px-6 lg:px-0.5">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-prose md:max-w-none">
          <h2 className="text-2xl font-semibold text-blue-950 sm:text-3xl">
           Your Health ,Just a Click Away
          </h2>

          <p className="mt-4 text-gray-700">
           Search,Compare,and book appointments with top doctors any time,
           anywhere,Access quality healthcare from the comfort of your Home
          </p>
          <Button className='md:translate-y-20 sm:translate-y-2'>Explore Now</Button>
        </div>
      </div>

      <div>
        <img
          src={"/Appointments-doctors-app/assets/hero-online-doctor-mobile-app_480x480.webp"}
          className="rounded"
          alt="hero"
          width={600}
          height={400}
        />
      </div>
    </div>
  </div>
</section>
// end-hero
  )
}

export default Hero