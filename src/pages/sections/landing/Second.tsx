import Link from "next/link";
import React from "react";
import Image from "next/image";


const Second = () => {
  return (
    <section
      id="about"
      data-testid="about"
      className="w-full bg-blue-800 py-10"
    >

      <div className="min-h-[3rem]"></div>

      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
        <h1 className="h2 mb-4 text-gray-100 text-2xl font-bold" data-aos="zoom-y-out" data-aos-delay="150">Mengapa harus memilih Ocean Statistics?</h1>
      </div>

      <div className="flex-col mx-auto max-w-6xl">

      <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-3 lg:gap-6 mx-4">
        
        {/* 1st Items */}
        <div className="flex flex-col p-6 bg-white items-center rounded-xl bg-[url('/assets/background.png')] bg-cover bg-no-repeat shadow-xl">
          <Image
          src="/assets/tentang-1.png"
          alt="scroll"
          width={150}
          height={150}
          className="duration-500 transition-all mb-4"
          />
          <h2 className="font-bold text-center text-lg text-blue-800 mb-4">Privasi Terjaga</h2>
          <p className="text-center">Kamu ngga perlu khawatir data atau identitasmu bocor nih! Karena kami menjamin privasi tiap konsumen.</p>
        </div>

        {/* 2nd Items */}
        <div className="flex flex-col p-6 bg-white items-center rounded-xl bg-[url('/assets/background.png')] bg-cover bg-no-repeat shadow-xl">
          <Image
          src="/assets/tentang-2.png"
          alt="scroll"
          width={150}
          height={150}
          className="duration-500 transition-all mb-4"
          />
          <h2 className="font-bold text-center text-lg text-blue-800 mb-4">Interpretasi Hasil</h2>
          <p className="text-center">Buat kamu yang masih bingung dengan datanya, kami siap membantu menjelaskan secara langsung ya! Kamu juga bisa minta kami buat konsultasi secara face to face di area sekitar Jogja.</p>
        </div>

        {/* 3rd Items */}
        <div className="flex flex-col p-6 bg-white items-center rounded-xl bg-[url('/assets/background.png')] bg-cover bg-no-repeat shadow-xl">
          <Image
          src="/assets/tentang-3.png"
          alt="scroll"
          width={150}
          height={150}
          className="duration-500 transition-all mb-4"
          />
          <h2 className="font-bold text-center text-lg text-blue-800 mb-4">Kami Bantu sampai ACC</h2>
          <p className="text-center">Ngga perlu ragu, ngga perlu bimbang. Kami siap membantumu mendapat acc dari dosen pembimbing tercinta!</p>
        </div>

      </div>

      </div>

    </section>
  );
};

export default Second;
