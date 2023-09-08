"use client"

import { ShowMoreProps } from '@/types'
import React from 'react'
import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton'
import { updateSearchParams } from '@/utils'



const ShowMore = ({ pageNum, isNext, setLimit }: ShowMoreProps) => {

    const handleNavigation = () => {
        const newLimit = (pageNum + 1) * 10;
       
        setLimit(newLimit);
    }
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton
                title="Show More"
                btnType="button"
                containerStyles="text-white bg-black rounded-md min-w-[130px]"
                handleClick={handleNavigation}
            />
        )}
    </div>


    )
}

export default ShowMore