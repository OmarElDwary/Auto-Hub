"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { CarProps } from '@/types';
import { calculateCarRent, generateCarImage } from '@/utils';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';



interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {

  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[30px]'>
        <span className='self-start text-[14px] font-semibold'>
          €
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>
          /Tag
        </span>
      </p>
      <div className='relative w-full h-40 my-2 object-contain'>
        <Image src={generateCarImage(car)} alt='car' fill priority className='object-contain'  />
      </div>
      <div className='relative flex w-full mt-3'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' alt='steerling-wheel' width={20} height={20} />
            <p className='text-[12px]'>
              {transmission === 'A' ? 'Automatisch' : 'Manuelles'}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' alt='steerling-wheel' width={20} height={20} />
            <p className='text-[12px]'>
              {drive.toUpperCase()}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' alt='steerling-wheel' width={20} height={20} />
            <p className='text-[12px]'>
              {city_mpg} MPG
            </p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <CustomButton
            title='More'
            containerStyles='w-full py-[13px] rounded-md bg-black'
            textStyles='text-white text-[12px] leading-[14px] font-bold'
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard