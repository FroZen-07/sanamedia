"use client";
import FeatureList from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import ImageGallerySection from "@/components/Gallery";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/Statistics";
import TeamSection from "@/components/TeamSection";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/logo_sana_media.jpg" />
      </Head>
      <Header/>
      <HeroSection/>
      <StatisticsSection/>
      <FeatureList/>
      <ImageGallerySection/>
      <TeamSection/>
      <Footer/>
    </>
  );
}
