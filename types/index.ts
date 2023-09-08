import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    disabled?: boolean;
    textStyles?: string;
    rightIcon?: string; 
}

export interface SearchBarProps {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive:string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
  }

export interface FilterProps {
    manufacturer: string,
    model: string,
    year: number,
    fuel: string,
    limit: number,
}
 
export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps<T> {
    options: OptionProps[];
    setFilter: (selected: T) => void;
}

export interface ShowMoreProps {
    pageNum: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}

export interface SearchManufacturerProps {
    selected: string;
    setSelected: (selected: string) => void;
}