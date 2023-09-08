"use client";
import { CarProps } from '@/types';
import React, { Fragment } from 'react'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { generateCarImage } from '@/utils';


interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <div>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className='fixed inset-0 bg-opacity-25' />
                </Transition.Child>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex items-center justify-center min-h-full p-4 text-center'>
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="relative p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-primary-blue-100 text-left shadow-xl transition-all flex flex-col gap-5">
                            <button type='button' onClick={closeModal} className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full">
                                <Image src='/close.svg' alt='close' width={20} height={20} />
                            </button>
                            <div className='flex flex-col gap-5'>
                                <div className='relative w-full h-40 my-2 bg-pattern bg-cover bg-center rounded-lg'>
                                  <Image src={generateCarImage(car)} alt='car' fill priority className='object-contain'  />  
                                </div>
                                <div className='flex gap-3'>
                                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                        <Image src={generateCarImage(car, '29')} alt='car' fill priority className='object-contain'  />
                                    </div>
                                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                        <Image src={generateCarImage(car, '33')} alt='car' fill priority className='object-contain'  />
                                    </div>
                                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                        <Image src={generateCarImage(car, '13')} alt='car' fill priority className='object-contain'  />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 flex-1'>
                                <h2 className='font-semibold text-xl capitalize'>
                                    {car.make} {car.model}
                                </h2>

                                <div className='flex gap-4 flex-wrap mt-3'>
                                    {Object.entries(car).map(([key, value]) => (
                                        <div key={key} className='flex gap-5 justify-between text-right w-full'>
                                            <h3 className='text-gray-500 capitalize'>{key.split("_").join(" ")}</h3>
                                            <p className='text-black-100 font-semibold'>{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </div>
  )
}

export default CarDetails