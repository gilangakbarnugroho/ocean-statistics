import { useState, useRef, useEffect} from 'react'
import Image from 'next/image';

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
              
              <Image className="h-[75px] w-[75px] saturate-0 hover:saturate-100" alt='BCA' src="/assets/logo-bca.png" width={75} height={75}/>
              
              <Image className="h-[75px] w-[150px] saturate-0 hover:saturate-100" alt='Mandiri' src="/assets/logo-mandiri.png" width={150} height={75}/>

              <Image className="h-[75px] w-[75px] saturate-0 hover:saturate-100" alt='OVO' src="/assets/logo-ovo.png" width={75} height={75}/>

              <Image className="h-[75px] w-[75px] saturate-0 hover:saturate-100" alt='Dana' src="/assets/logo-dana.png" width={75} height={75}/>
              
              <Image className="h-[75px] w-[150px] saturate-0 hover:saturate-100" alt='Gopay' src="/assets/logo-gopay.png" width={150} height={75}/>

              <Image className="h-[75px] w-[150px] saturate-0 hover:saturate-100" alt='Shopeepay' src="/assets/logo-shopeepay.png" width={150} height={75}/>

              <Image className="h-[75px] w-[150px] saturate-0 hover:saturate-100" alt='Seabank' src="/assets/logo-seabank.png" width={150} height={75}/>

            </div>

          </div>

          <div className="max-w-6xl rounded-3xl bg-blue-800 flex place-items-center p-8 mt-12">
            <Image className="w-[250px]" src="assets/garansi100.png" alt='Garansi' width={250} height={250}/>
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