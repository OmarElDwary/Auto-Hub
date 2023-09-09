"use client";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filter
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // pagination
  const [limit, setLimit] = useState(10);
  

  const getCars = async () => {
    try{
      const response = await fetchCars({
        manufacturer: manufacturer || '',
        model: model || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
      })
  
      setAllCars(response);
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model])


  const dFirstpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discver">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Autokatalog </h1>
          <p>Erkunden Sie Autos, die Ihnen gefallen.</p>
        </div>
        <div className="home__filters">
          <SearchBar
            setManufacturer={setManufacturer}
            setModel={setModel}
          />

          <div className="home__filter-container">
            <CustomFilter options={fuels} setFilter={setFuel} />
            <CustomFilter options={yearsOfProduction} setFilter={setYear} />
          </div>

          {allCars.length > 0 ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car) => <CarCard car={car} />)}
              </div>
              {loading && (
                <div className="flex justify-center">
                  <div className="loader"></div>
                </div>
              )}
              <ShowMore 
                pageNum={limit / 10}
                isNext={limit < allCars.length}
                setLimit={setLimit}
              />
            </section>
          ) : ( 
            <div>
              <h1>No cars</h1>
              <p>{allCars?.message}</p>
            </div>
          )   
          }
        </div>
      </div>
    </main>
  )
}
