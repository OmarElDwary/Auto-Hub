"use client";
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image';

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-primary-blue">
          Finde, reserviere oder miete schnell und einfach ein Auto.
        </h1>
        <p className="hero__subtitle">
          Vereinfachen Sie Ihr Mietwagenerlebnis mit unserem einfachen Buchungsprozess.
        </p>
        <CustomButton
          title="Entdecken Sie Autos"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
        <div className='hero__image-container'>
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>
          <div className="hero__image-overlay"></div>
        </div>
    </div>
  )
}

export default Hero
