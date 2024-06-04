import React from "react";
import Image from "next/image";
import LaptopScreen from "../../asset/laptopscreen.svg";
import MobileScreen from "../../asset/PhoneDesign.svg";

export default function ScreenFeature() {
  return (
    <>
      <div className="grid items-center justify-around mt-12">
        <div title="forLeftFeature">
          <ul className="flex items-center ml-12">
            <Image src={LaptopScreen} className="-rotate-6" alt="laptop Screen" width={330} />
            <Image className="-ml-14 mt-2" src={MobileScreen} alt="Mobile Screen" width={90} />
          </ul>
          <li className="list-none"></li>
        </div>
        <div className="mt-12 px-14">
          <ul>
            <h1 className="text-2xl font-semibold">Responsif dan Mobile-Friendly</h1>
            <p className="max-w-lg text-sm text-neutral-300 mt-3">Desain responsif memastikan bahwa tampilan situs web atau aplikasi Anda dapat menyesuaikan diri dengan berbagai ukuran layar, baik itu desktop, tablet, atau ponsel.</p>
          </ul>
          <ul className="mt-4">
            <h1 className="text-2xl font-semibold">Navigasi Intuitif</h1>
            <p className="max-w-lg text-sm text-neutral-300 mt-3">Pemilihan menu dan struktur navigasi harus disesuaikan dengan kebutuhan dan preferensi pengguna pada platform yang bersangkutan.</p>
          </ul>
          <ul className="mt-4">
            <h1 className="text-2xl font-semibold">Konsistensi Desain</h1>
            <p className="max-w-lg text-sm text-neutral-300 mt-3">Penting untuk mempertahankan konsistensi desain antara desktop dan mobile untuk menciptakan pengalaman pengguna yang menyatu.</p>
          </ul>
        </div>
      </div>
    </>
  );
}