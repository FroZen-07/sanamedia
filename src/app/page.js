"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/logo_sana_media.jpg" />
      </Head>
      <Header/>
      <HeroSection/>
    </>
  );
}
