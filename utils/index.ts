import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps){
    const { manufacturer, model, year, fuel, limit } = filters;
    const headers = {
        'X-RapidAPI-Key': '50955c97ebmshdff010eae288828p169a44jsn70fb102901d1',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {headers: headers});

    const data = await response.json();

    return data;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
export const generateCarImage = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');
    const { make, model, year } = car;
    
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPath = `${window.location.pathname}?${searchParams.toString()}`;

    return newPath;
}