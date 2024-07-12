export const metadata = {
  }
  
  import Accordion from '@/components/Accordion'
  
  export default function AnimatedAccordionPage() {
  
    const faqs = [
      {
        title: "Apakah Data dan Privasi Saya dijamin aman?",
        text: "Kami menjamin data dan privasi klien tetap aman serta jika ada pemintaan untuk menghapus project dari klien",
        active: false,
      },
      {
        title: "Bagaimana jika hasil olah data masih ada revisi?",
        text: "Kami pastikan klien mendapatkan garansi revisi data sampai selesai!",
        active: false,
      },
      {
        title: "Apakah saya perlu pelunasan diawal atau DP dulu?",
        text: "Dalam upaya mencegah terjadinya segala macam bentuk penipuan, klien diharapkan membayar DP 50% terlebih dahulu diawal.",
        active: false,
      },
      {
        title: "Apakah saya bisa konsultasi setelah pekerjaan selesai?",
        text: "Kamu bisa konsultasi dan menghubungi kami kapanpun dan dimanapun",
        active: false,
      },
      {
        title: "Apakah boleh request uji yang belum ada di layanan?",
        text: "Silahkan hubungi kami untuk konsultasi langsung mengenai kasus penelitian kamu!",
        active: false,
      },
      
    ]
  
    return (
      <main 
      id="faq"
      data-testid="faq"
      className="relative flex flex-col justify-center overflow-hidden">
        
        {/* Section header */}
        <div className="max-w-3xl mx-auto mb-4 text-center transition-w transition-opacity">
          <h1 className="mb-3 text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500 leading-tight font-extrabold" data-aos="zoom-y-out" data-aos-delay="150">Pertanyaan Yang Sering Ditanyakan</h1>
          <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200"><span className='font-bold'>Ocean Statistics</span>mempermudah dan memperlancar tugas akhir kamu!</p>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-4">
  
          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                {faq.text}
              </Accordion>
            ))}
          </div>
  
        </div>

        <div className="min-h-[5.2rem]"></div>
        
      </main>
    )
  }