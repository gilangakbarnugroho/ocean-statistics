import Link from "next/link";
import { useState, useRef, useEffect} from 'react'
import { GiPublicSpeaker } from "react-icons/gi"
import { FaUniversity } from "react-icons/fa"
import { RiTeamFill } from "react-icons/ri"

const CTA = () => {

    const [tab, setTab] = useState<number>(2)

    const tabs = useRef<HTMLDivElement>(null)
  
    const heightFix = () => {
      if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }
  
    useEffect(() => {
      heightFix()
    }, []) 

  return (
    <section 
    id="cta"
    data-testid="cta"
    className="relative"
    >
     
     {/* Section background */}
     <div className="relative max-w-6xl mx-auto pb-12 px-4 sm:px-6">
        <div className="pt-12 md:pt-4 pb-12"> 

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center transition-w transition-opacity">
            <h1 className=" text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-800 leading-tight font-extrabold" data-aos="zoom-y-out" data-aos-delay="150">Metode Pembayaran</h1>
          </div>

          <div className="max-w-6xl md:my-8">
            <div className="max-w-6xl grid grid-cols-4 md:grid-cols-7 gap-4 place-items-center">
              
              <img className="h-[75px] w-[75px] saturate-0 hover:saturate-100" src="/assets/logo-bca.png"/>
              
              <img className="h-[75px] w-[150px] saturate-0 hover:saturate-100" src="/assets/logo-mandiri.png"/>

              <img className="h-[75px] w-[75px] saturate-0 hover:saturate-100" src="/assets/logo-ovo.png"/>

              <img className="h-[75px] w-[75px] saturate-0 hover:saturate-100" src="/assets/logo-dana.png"/>
              
              <img className="h-[75px] w-[150px] saturate-0 hover:saturate-100" src="/assets/logo-gopay.png"/>

              <img className="h-[75px] w-[150px] saturate-0 hover:saturate-100" src="/assets/logo-shopeepay.png"/>

              <img className="h-[75px] w-[150px] saturate-0 hover:saturate-100" src="/assets/logo-seabank.png"/>

            </div>

          </div>

          <div className="max-w-6xl rounded-3xl bg-blue-800 flex place-items-center p-8 mt-12">
            <img className="w-[250px]" src="assets/garansi100.png"/>
            <div className="relative">
              <h2 className="text-2xl font-bold text-white uppercase mb-2">Garansi 100% Uang Kembali!</h2>
              <p className="text-white">Kami Menjamin Pengembalian Uang Sepenuhnya! Jika hasil pengujian tidak sesuai dengan kesepakatan dan data di lapangan, kami memberikan jaminan penuh. Kepuasan klien adalah prioritas utama kami</p>
            </div>
          </div>

        </div>
    
     </div>

    </section>
  );
};

export default CTA;