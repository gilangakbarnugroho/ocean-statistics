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
    id="contact us"
    data-testid="contact us"
    className="relative"
    >
     
     {/* Section background */}
     <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-4 pb-12"> 

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4" data-aos="zoom-y-out" data-aos-delay="150">
          <h1 className="h1 text-3xl mb-2 font-extrabold text-gray-600">Join Us</h1>
          <p className="text-lg text-gray-600">Join to support us</p>
          </div>

          {/* Social as */}
          <div className="max-w-3xl mx-auto justify-center md:pb-2 my-3" data-aos="zoom-y-out" data-aos-delay="150"> 
          <ul className="mb-4 md:order-1 md:ml-0 md:mb-0">
            <li className="ml-0">
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=hi.idnft@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello%20IDNFT%2C%0A%0AI%20hope%20this%20message%20find%20you%20well.%20We%E2%80%99ve%20been%20following%20IDNFT's%20impactful%20work%20in%20the%20Web3%20and%20NFT%20space%20and%20are%20impressed%20by%20the%20innovative%20initiative,%0AI%20believe%20there%20could%20be%20exciting%20collaboration%20opportunities%20between%20our%20organizations.%20%0A%0ALooking%20forward%20to%20the%20possibility%20of%20working%20together,%0A%0A%0ABest%20regards,%2C%0A%0A%0A%0A" rel="noopener" target="blank" className="flex py-3 justify-center items-center text-white hover:text-gray-600 bg-red-700 hover:bg-gray-100 rounded-lg shadow transition duration-150 ease-in-out" aria-label="Email">
              <RiTeamFill 
              size={25}
              />
                <span>as Program Partner (Sponsorship)</span>
              </a>
            </li>
          </ul>
          </div>

          <div className="max-w-3xl mx-auto justify-center md:pb-2 my-3" data-aos="zoom-y-out" data-aos-delay="150"> 
          <ul className="mb-4 md:order-1 md:ml-0 md:mb-0">
            <li className="ml-0">
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=hi.idnft@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello%20IDNFT%2C%0A%0AI%20hope%20this%20message%20find%20you%20well.%20We%E2%80%99ve%20been%20following%20IDNFT's%20impactful%20work%20in%20the%20Web3%20and%20NFT%20space%20and%20are%20impressed%20by%20the%20innovative%20initiative,%0AI%20believe%20there%20could%20be%20exciting%20collaboration%20opportunities%20between%20our%20organizations.%20%0A%0ALooking%20forward%20to%20the%20possibility%20of%20working%20together,%0A%0A%0ABest%20regards,%2C%0A%0A%0A%0A" rel="noopener" target="blank" className="flex py-3 justify-center items-center text-white hover:text-gray-600 bg-red-700 hover:bg-gray-100 rounded-lg shadow transition duration-150 ease-in-out" aria-label="Instagram">
                <GiPublicSpeaker
                size={25}
                />
                <span>as Speaker</span>
              </a>
            </li>
          </ul>
          </div>

          <div className="max-w-3xl mx-auto justify-center md:pb-2 my-3" data-aos="zoom-y-out" data-aos-delay="150"> 
          <ul className="mb-4 md:order-1 md:ml-0 md:mb-0">
            <li className="ml-0">
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=hi.idnft@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello%20IDNFT%2C%0A%0AI%20hope%20this%20message%20find%20you%20well.%20We%E2%80%99ve%20been%20following%20IDNFT's%20impactful%20work%20in%20the%20Web3%20and%20NFT%20space%20and%20are%20impressed%20by%20the%20innovative%20initiative,%0AI%20believe%20there%20could%20be%20exciting%20collaboration%20opportunities%20between%20our%20organizations.%20%0A%0ALooking%20forward%20to%20the%20possibility%20of%20working%20together,%0A%0A%0ABest%20regards,%2C%0A%0A%0A%0A" rel="noopener" target="blank" className="flex py-3 justify-center items-center text-white hover:text-gray-600 bg-red-700 hover:bg-gray-100 rounded-lg shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <FaUniversity 
                size={25}
                />
                <span>as University Partner</span>
              </a>
            </li>
          </ul>
          </div>

          {/* <div className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none mb-8"> */}
            
            {/* 1st */}
            {/* <div className="sm:hidden lg:visible flex flex-col h-full p-6 mt-12 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div>
                <div className="mb-4 flex place-items-end content-center justify-center">
                  <RiTeamFill className="rounded-full bg-white absolute p-3 shadow-lg" size={64} />
                </div>
              </div>
              <div>
              <blockquote className="text-lg font-bold text-red-700 text-center">as Program Partner/Sponsorship</blockquote>
              <div className="text-gray-600 font-medium mt-6 p-5 border-gray-300 text-center">
                <Link className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full sm:w-auto sm:mb-0 place-items-center justify-center content-center p-4" href="#" replace>See More</Link>
              </div>
              </div>
            </div> */}

            {/* 2nd */}
            {/* <div className="sm:hidden lg:visible flex flex-col h-full p-6 mt-12 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div>
                <div className="mb-4 flex place-items-end content-center justify-center">
                  <GiPublicSpeaker className="rounded-full bg-white absolute p-3 shadow-lg" size={64} />
                </div>
              </div>
              <div>
              <blockquote className="text-lg font-bold text-red-700 text-center">as a Speaker</blockquote>
              <div className="text-gray-600 font-medium mt-6 p-5 border-gray-300 text-center">
                <Link className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-0 place-items-center justify-center content-center p-4" href="#" replace>See More</Link>
              </div>
              </div>
            </div> */}

            {/* 3rd */}
            {/* <div className="sm:hidden lg:visible flex flex-col h-full p-6 mt-12 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div>
                <div className="mb-4 flex place-items-end content-center justify-center">
                  <FaUniversity className="rounded-full bg-white absolute p-3 shadow-lg" size={64} />
                </div>
              </div>
              <div>
              <blockquote className="text-lg font-bold text-red-700 text-center">as University Partner</blockquote>
              <div className="text-gray-600 font-medium mt-6 p-5 border-gray-300 text-center">
                <Link className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-0 place-items-center justify-center content-center p-4" href="#" replace>See More</Link>
              </div>
              </div>
            </div> */}

          {/* </div> */}

        </div>
    
     </div>

    </section>
  );
};

export default CTA;