import Image from "next/image"

import UGM from '/public/partner/univ-ugm.svg'
import ITS from '/public/partner/univ-its.svg'
import UM from '/public/partner/univ-um.svg'
import UII from '/public/partner/univ-uii.svg'
import UB from '/public/partner/univ-ub.svg'
import Widyatama from '/public/partner/univ-widyatama.svg'
import Petra from '/public/partner/univ-petra.svg'
import UPI from '/public/partner/univ-upi.svg'
import Telkom from '/public/partner/univ-telkom.svg'
import IsiBali from "/public/partner/univ-isibali.svg"
import Andalas from "/public/partner/univ-andalas.svg"
import Binus from "/public/partner/univ-binus.svg"
import UPN from "/public/partner/univ-upn.svg"
import Unesa from "/public/partner/univ-unesa.svg"
import UHW from "/public/partner/univ-uhw.svg"

import BinanceAcademy from "/public/partner/comp-binanceacademy.svg"
import Tokocrypto from "/public/partner/comp-tokocrypto.svg"
import Sermorpheus from "/public/partner/comp-sermorpheus.svg"
import Pintu from "/public/partner/comp-pintu.svg"
import NounsDao from "/public/partner/comp-nounsdao.svg"
import Tezos from "/public/partner/comp-tezos.svg"
import Algorand from "/public/partner/comp-algorand.svg"

const Partner = () => {
    return (

    <section className="relative">

        <div className="py-12 md:py-20 px-4 sm:px-8">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 text-3xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">Previous Partner</h2>
            <p className="text-l text-gray-600" data-aos="zoom-y-out">University Partner</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-6 md:grid-cols-5 sm:grid-cols-6" data-aos="zoom-y-out">

            {/* Logo UGM */}
            <div className="items-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={UGM} width={75} height={75} alt="UGM" />
              </div>
              <h3 className='text-center text-sm text-gray-600 mt-3'>Gadjah Mada University</h3>
            </div>

            {/* Logo ITS */}
            <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={ITS} width={75} height={75} alt="ITS" />  
              </div>  
              <h3 className="text-center text-sm text-gray-600 mt-3">Sepuluh Nopember Technology Institute</h3>          
            </div>

            {/* Logo UB */}
            <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={UB} width={75} height={75} alt="UB" />
              <h3 className="text-center text-sm text-gray-600 mt-3">Brawijaya University</h3>
              </div>
            </div>

            {/* Logo UM */}
            <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={UM} width={75} height={75} alt="UM" />
              <h3 className="text-center text-sm text-gray-600 mt-3">Malang State University</h3>
              </div>
            </div>

            {/* Logo UII */}
            <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={UII} width={75} height={75} alt="UII" />
              <h3 className="text-center text-sm text-gray-600 mt-3">Islamic University of Indonesia</h3>
              </div>
            </div>

            {/* Logo Widyatama */}
            <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={Widyatama} width={75} height={75} alt="Widyatama" />
              <h3 className="text-center text-sm text-gray-600 mt-3">Widyatama University</h3>
              </div>
            </div>

            {/* Logo UPN */}
            <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={UPN} width={75} height={75} alt="UPN" />
              <h3 className="text-center text-sm text-gray-600 mt-3">UPN “Veteran” Yogyakarta</h3>
              </div>
            </div>

            {/* Logo UPI */}
            <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={UPI} width={75} height={75} alt="UPI" />
              <h3 className="text-center text-sm text-gray-600 mt-3">Education University of Indonesia</h3>
              </div>
            </div>

            {/* Logo ISI Bali */}
            <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={IsiBali} width={75} height={75} alt="ISI Bali" />
              <h3 className="text-center text-sm text-gray mt-3">Indonesia Institute of Art Bali</h3>
              </div>
            </div>

            {/* Logo Andalas */}
            <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={Andalas} width={75} height={75} alt="Andalas" />
              <h3 className="text-center text-sm text-gray-600 mt-3">Andalas University</h3>
              </div>
            </div>

             {/* Logo Telkom */}
             <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={Telkom} width={75} height={75} alt="Telkom" />
              <h3 className="text-center text-sm text-gray-600 mt-3">Telkom University</h3>
              </div>
            </div>

             {/* Logo Petra */}
             <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={Petra} width={75} height={75} alt="Petra" />
              <h3 className="text-center text-sm text-gray-600 mt-3">Petra Christian University</h3>
              </div>
            </div>

             {/* Logo Binus */}
             <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={Binus} width={75} height={75} alt="Binus" />
              <h3 className="text-center text-sm text-gray-600 mt-3">Binus University</h3>
              </div>
            </div>

             {/* Logo Unesa */}
             <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={Unesa} width={75} height={75} alt="Unesa" />
              <h3 className="text-center text-sm text-gray-600 mt-3">Surabaya State University</h3>
              </div>
            </div>

             {/* Logo UHW */}
             <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={UHW} width={75} height={75} alt="UHW" />
              <h3 className="text-center text-sm text-gray-600 mt-3">Hayam Wuruk Perbanas University</h3>
              </div>
            </div>            
        </div>  

      <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <p className="text-l text-gray-600" data-aos="zoom-y-out">Industry Partner</p>
          </div>

            {/* Items */}
            <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-3 sm:grid-cols-4" data-aos="zoom-y-out">

            {/* Logo Binance Academy */}
            <div className="items-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
                <div>
               <Image className="md:max-w-none mx-auto" src={BinanceAcademy} width={150} height={75} alt="Binance Academy" />
                </div>
            </div>

            {/* Logo Tokocrypto */}
            <div className="items-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
                <div>
                <Image className="md:max-w-none mx-auto" src={Tokocrypto} width={75} height={75} alt="Tokocrypto" />
               </div>
            </div>

              {/* Logo Sermorpheus */}
            <div className="items-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <div>
              <Image className="md:max-w-none mx-auto" src={Sermorpheus} width={150} height={75} alt="Sermorpheus" />
               </div>
            </div>

              {/* Logo Pintu */}
            <div className="items-center mt-6 py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
                <div>
               <Image className="md:max-w-none mx-auto" src={Pintu} width={75} height={75} alt="Pintu" />
               </div>
            </div>

            {/* Logo Nouns Dao */}
            <div className="items-center mt-6 py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
               <div>
                <Image className="md:max-w-none mx-auto" src={NounsDao} width={75} height={75} alt="Nouns Dao" />
                </div>
             </div>

             {/* Logo Tezos */}
             <div className="items-center mt-6 py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
                <div>
                <Image className="md:max-w-none mx-auto" src={Tezos} width={75} height={75} alt="Tezos" />
              </div>
            </div>

              {/* Logo Algorand */}
              <div className="items-center mt-6 py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
                <div>
                <Image className="md:max-w-none mx-auto" src={Algorand} width={75} height={75} alt="Algorand" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
export default Partner