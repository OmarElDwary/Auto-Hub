"use client"
import React, { useState } from 'react'
import { SearchManufacturer } from './'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SearchBarProps } from '@/types'

const SearchButton = ({ otherClasses }: {otherClasses: string}) => (
    <button type='submit' className={`-ML-3 Z-10 ${otherClasses}`}>
        <Image src='/magnifying-glass.svg' alt='search' width={20} height={20} />
    </button>
)

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");


  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(searchManufacturer === '' && searchModel === '') {
        return alert('Please enter a manufacturer or model')
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  }


  

  return (
    <form onSubmit={handleSearch} className="searchbar">
        <div className="searchbar__item">
            <SearchManufacturer
                selected={searchManufacturer}
                setSelected={setSearchManufacturer}
            />
            <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
          <Image
            src='/model-icon.png'
            alt='model'
            width={20}
            height={20}
            className='absolute ml-4'
          />
          <input
            type='text'
            placeholder='Model'
            className='searchbar__input'
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar