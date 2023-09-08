"use client";
import { SearchManufacturerProps } from "@/types";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? []
      : manufacturers.filter((manufacturer) =>
        manufacturer
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(query.toLowerCase().replace(/\s/g, ""))
      );

  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            onChange={(event) => setQuery(event.target.value)} // update the query value on input change
            displayValue={(manufacturer: string) => manufacturer}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-manufacturer__option'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((manufacturer) => (
                  <Combobox.Option
                    key={manufacturer}
                    className={({ active }) => `relative search__manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-black'}`}
                    value={manufacturer}
                  >
                    {manufacturer}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
