

import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


  const Count = () => {
    const [counterOn, setCounterOn] = useState(false)

    return (
      <section       
      id="overview"
      data-testid="overview"
      className="flex flex-col py-8 relative">
        
        {/* Section background */}
        <div className="absolute inset-0 bg-gray-100 pointer events-none mb-16" aria-hidden="true"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-12">
            
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700 text-3xl sm:text-[2.5rem] leading-8 font-extrabold" data-aos="zoom-y-out" data-aos-delay="150">Previous</h1>
              <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">Web3 on Campus</p>
            </div>

            {/* Items */}
            <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-2 md:grid-cols-5 sm:grid-cols-2 mb-4" data-aos="zoom-y-out">

              {/* Items 1 */}
              <div className="items-center py-2 col-span-2 md:col-auto">

              <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                <h1 className="h1 mb-2 text-gray-600 text-3xl sm:text-[2rem] leading-8 font-bold text-gray-700 lmd:text-4xl" data-aos="zoom-y-out" data-aos-delay="150">
                {counterOn && 
                <CountUp
                start={0}
                end={19}
                duration={2}
                delay={0}
                />  
              }
              
              </h1> 
              </ScrollTrigger>
                <div className="text-lg text-gray-600" data-aos="zoom-y-out">
                  Big Campus in Indonesia
                </div>
              </div>

              {/* Items 2 */}
              <div className="items-center py-2 col-span-2 md:col-auto">

              <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                <h1 className="h1 mb-2 text-gray-600 text-3xl sm:text-[2rem] leading-8 font-bold text-gray-700 lmd:text-4xl" data-aos="zoom-y-out" data-aos-delay="150">
                {counterOn && 
                <CountUp
                start={0}
                end={6000}
                duration={2.5}
                delay={0}
                />  
              }
              +
              </h1> 
              </ScrollTrigger>
                <div className="text-lg text-gray-600" data-aos="zoom-y-out">
                  Students
                </div>
              </div>

              {/* Items 3 */}
              <div className="items-center py-2 col-span-2 md:col-auto">

              <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                <h1 className="h1 mb-2 text-gray-600 text-3xl sm:text-[2rem] leading-8 font-bold text-gray-700 lmd:text-4xl" data-aos="zoom-y-out" data-aos-delay="150">
                {counterOn && 
                <CountUp
                start={0}
                end={8}
                duration={3}
                delay={0}
                />  
              }
              +
              </h1> 
              </ScrollTrigger>
                <div className="text-lg text-gray-600" data-aos="zoom-y-out">
                  Cities Roadshow
                </div>
              </div>

              {/* Items 4 */}
              <div className="items-center py-2 col-span-2 md:col-auto">

              <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                <h1 className="h1 mb-2 text-gray-600 text-3xl sm:text-[2rem] leading-8 font-bold text-gray-700 lmd:text-4xl" data-aos="zoom-y-out" data-aos-delay="150">
                {counterOn && 
                <CountUp
                start={0}
                end={30}
                duration={3.5}
                delay={0}
                />  
              }
              +
              </h1> 
              </ScrollTrigger>
                <div className="text-lg text-gray-600" data-aos="zoom-y-out">
                  Speakers Session
                </div>
              </div>

              {/* Items 5 */}
              <div className="items-center py-2 col-span-2 md:col-auto">

              <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                <h1 className="h1 mb-2 text-gray-600 text-3xl sm:text-[2rem] leading-8 font-bold text-gray-700 lmd:text-4xl" data-aos="zoom-y-out" data-aos-delay="150">
                {counterOn && 
                <CountUp
                start={0}
                end={15}
                duration={4}
                delay={0}
                />  
              }
              +
              </h1> 
              </ScrollTrigger>
                <div className="text-lg text-gray-600 " data-aos="zoom-y-out">
                  Brand, Community & Partner
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>
    )
 }
 
export default Count