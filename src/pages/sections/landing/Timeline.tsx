import Image from "next/image"
import { useState } from "react"

import src from "/public/pg2-2.webp"
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
import Hamzanwadi from '/public/partner/univ-hamzanwadi.svg'
import Unram from "public/partner/univ-unram.svg"
import UMB from "public/partner/univ-umb.svg"
import UPH from "public/partner/univ-uph.svg"


const Timeline = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleShowMore = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (

    <section className="relative antialiased">

        <div className="relative justify-center
         flex flex-col overflow-hidden pb-12 md:pb-16 px-4 sm:px-8">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-12">
                <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">Web3 on Campus</p>
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700 text-3xl sm:text-[2.5rem] leading-8 font-extrabold" data-aos="zoom-y-out" data-aos-delay="150">Timeline</h1>
            </div>

            <div className="w-full max-w-6xl mx-auto">

                    {/* <!-- Vertical Timeline --> */}
                    <div 
                    id="expanded"
                    data-testid="expanded"
                    className="space-y-8 md:px-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[10.5rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent overflow-hidden">

                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">2023</p>
                        </div>
                        
                        {/* <!-- Item #1 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                        <Image
                                        src={Widyatama}
                                        alt="Widyatama"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Bandung</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Universitas Widyatama</span> March 13, 2023</div>
                            </div>
                        </div>

                        {/* <!-- Item #2 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={Petra}
                                        alt="Petra"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Surabaya</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Petra Christian University</span> Apr 17, 2024</div>
                            </div>
                        </div>
                        {isExpanded && (
                            <div className="space-y-8 relative before:absolute">

                        {/* <!-- Item #3 --> */}    
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={ITS}
                                        alt="ITS"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28"></time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="absolute bottom-[6px] md:pl-[162px] text-slate-500 ml-14"><span className="text-slate-900 font-bold">Institut Teknologi Surabaya</span> May 29, 2024</div>
                            </div>
                        </div>
                        
                        {/* <!-- Item #4 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={Binus}
                                        alt="Binus"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Jakarta</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Binus University</span> June 16, 2023</div>
                            </div>
                        </div>
                        
                        {/* <!-- Item #5 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={UB}
                                        alt="Brawijaya"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Malang</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Brawijaya University</span> Sept 25, 2023</div>
                            </div>
                        </div>

                        {/* <!-- Item #6 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={UM}
                                        alt="Universitas Negeri Malang"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="invisible font-medium text-xl text-gray-500 md:w-28"></time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="absolute bottom-[6px] md:pl-[162px] text-slate-500 ml-14"><span className="text-slate-900 font-bold">Malang State University</span> Sept 25, 2023</div>
                            </div>
                        </div>
                        
                        {/* <!-- Item #7 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={UPI}
                                        alt="Universitas Pendidikan Indonesia"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Bandung</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Indonesia Educational University</span> Oct 13, 2023</div>
                            </div>
                        </div>

                        {/* <!-- Item #8 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={UGM}
                                        alt="Gadjah Mada University"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Yogyakarta</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Gadjah Mada University</span> Oct 20, 2023</div>
                            </div>
                        </div>

                        {/* <!-- Item #9 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={UII}
                                        alt="Universitas Islam Indonesia"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28"></time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="absolute bottom-[6px] md:pl-[162px] text-slate-500 ml-14"><span className="text-slate-900 font-bold">Indonesia Islamic University</span> Oct 11, 2023</div>
                            </div>
                        </div>

                        {/* <!-- Item #10 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={Telkom}
                                        alt="Universitas Pendidikan Indonesia"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Bandung</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Telkom University</span> Nov 17, 2023</div>
                            </div>
                        </div>

                        {/* <!-- Item #11 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={UPN}
                                        alt="UPN"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Yogyakarta</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">UPN Veteran Yogyakarta</span> Oct 13, 2023</div>
                            </div>
                        </div>

                        {/* <!-- Item #12 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={IsiBali}
                                        alt="ISI"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Bali</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Denpasar Indonesia Art University</span> Nov 28, 2023</div>
                            </div>
                        </div>

                        {/* <!-- Item #13 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={Andalas}
                                        alt="ISI"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Padang</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Andalas University</span> Des 12, 2023</div>
                            </div>
                        </div>

                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">2024</p>
                        </div>

                        {/* <!-- Item #1 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={Petra}
                                        alt="Petra Christian University"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Surabaya</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Petra Christian University</span> Feb 19, 2024</div>
                            </div>
                        </div>

                        {/* <!-- Item #2 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={Unesa}
                                        alt="Unesa"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28"></time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="absolute bottom-[6px] md:pl-[162px] text-slate-500 ml-14"><span className="text-slate-900 font-bold">Surabaya State University</span> Feb 20, 2024</div>
                            </div>
                        </div>

                        {/* <!-- Item #3 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={UHW}
                                        alt="Universitas Hayam Wuruk"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28"></time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="absolute bottom-[6px] md:pl-[162px] text-slate-500 ml-14"><span className="text-slate-900 font-bold">Hayam Wuruk Perbanas University</span> Feb, 21 2024</div>
                            </div>
                        </div>

                        {/* <!-- Item #4 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={Hamzanwadi}
                                        alt="Universitas Hamzanwadi"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Lombok</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Hamzanwadi University</span> Mar 6, 2024</div>
                            </div>
                        </div>

                        {/* <!-- Item #5 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={Unram}
                                        alt="Universitas Mataram"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28"></time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="absolute bottom-[6px] md:pl-[162px] text-slate-500 ml-14"><span className="text-slate-900 font-bold">Mataram University</span> Mar 8, 2024</div>
                            </div>
                        </div>

                        {/* <!-- Item #6 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={UMB}
                                        alt="Mercu Buana"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28">Jakarta</time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">Mercu Buana University</span> May 13, 2024</div>
                            </div>
                        </div>

                        {/* <!-- Item #7 --> */}
                        <div className="relative">
                            <div className="md:flex items-center md:space-x-4 mb-3">
                                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                    {/* <!-- Icon --> */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <Image
                                        src={UPH}
                                        alt="Universitas Pelita Harapan"
                                        width={50}
                                        height={50}
                                        className="p-1"
                                        />
                                    </div>
                                    {/* <!-- Date --> */}
                                    <time className="font-medium text-xl text-gray-500 md:w-28"></time>
                                </div>
                                {/* <!-- Title --> */}
                                <div className="absolute bottom-[6px] md:pl-[162px] text-slate-500 ml-14"><span className="text-slate-900 font-bold">Pelita Harapan University</span> Jul 10, 2024</div>
                            </div>
                        </div>
                            
                        </div>
                        )}
                        <div className="flex inset-x-0 top-0 mx-auto min-w-screen items-center place-content-center overflow-hidden">
                        <a 
                         href="#expanded"
                         onClick={toggleShowMore} 
                         className="relative font-bold z-10 inset-x-0 bottom-0 min-w-screen justify-center py-2 px-4 text-center text-white mb-4 rounded-full bg-red-700 hover:bg-gray-200 hover:text-gray-700"
                         aria-hidden="true">
                         {isExpanded ? 'Show Less' : 'Show More'}
                        </a>
                        <svg width="1920" height="214" viewBox="0 0 1920 214" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 inset-x-0 bottom-0 overflow-hidden">
                            <rect width="1920" height="214" fill="url(#paint0_radial_61_1619)"/>
                            <defs>
                            <radialGradient id="paint0_radial_61_1619" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(960 477) rotate(-90) scale(360 4279.63)">
                            <stop stop-color="red"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </radialGradient>
                            </defs>
                        </svg>

                        </div>

                    </div>
                    {/* <!-- End: Vertical Timeline --> */}

                </div>    
            </div>

        </div>
    </section>
  )
}
export default Timeline