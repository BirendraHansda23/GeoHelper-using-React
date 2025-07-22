import { useState, useRef, useEffect } from "react";
import earthImage from "../assets/images/earth.avif";
import searchIcon from "../assets/images/search.svg";
import searchCountry from "../utils/searchCountry";
import { Output } from "./Output";

export function Search() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const outputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setCountryData(null);
    setIsLoading(true);

    const result = await searchCountry(country);
    setIsLoading(false);

    if (result) {
      setCountryData(result);
    } else {
      setErrorMessage("Could not find the country. Please try again.");
    }
  };

  useEffect(() => {
    if (countryData && outputRef.current) {
      outputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [countryData]);

  return (
    <>
      <section
        className="relative max-w-full p-8 h-[94vh] mx-auto flex justify-center items-center"
      >
        <div className="absolute -z-10">
          <picture>
            <img
              src={earthImage}
              className="w-[100vw] h-[94vh] object-cover"
              alt="earth-background"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-0 opacity-90 bg-white/25 backdrop-blur-xl"></div>
        </div>
        <div className="max-w-[500px] pb-5 text-black flex flex-col gap-4">
          <h2 className="font-[Trebuchet_MS] font-extrabold text-5xl md:text-6xl">
            Explore Countries
          </h2>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="nameInput"
              className="font-[Lucida_Sans] text-sm md:text-base font-extrabold"
            >
              Try India, Russia, or Japan.
            </label>
            <div className="w-[100%] md:w-[78%] flex items-center justify-between border-2 border-gray-200 rounded-lg bg-white overflow-hidden drop-shadow-sm drop-shadow-stone-700">
              <input
                type="search"
                className="search-input px-3 outline-none border-none text-base md:text-lg w-full"
                placeholder="Enter country name..."
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                aria-label="Country name"
                required
              />
              <button
                type="submit"
                className="search-button bg-lime-300 p-3 contrast-80 hover:contrast-70 cursor-pointer"
                aria-label="Search button"
              >
                <img src={searchIcon} className="h-[24px]" alt="search" />
              </button>
            </div>
            {errorMessage ? (
              <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
            ): <p class="font-[Lucida_Sans] mt-1 text-sm md:text-base">
              (Note: Please input correct names of the countries)
            </p>}
          </form>
        </div>
      </section>

      {isLoading && (
        <p className="text-center text-white text-lg font-semibold text-gray-700 my-4">
          Loading...
        </p>
      )}

      {countryData && !isLoading && (
        <div ref={outputRef}>
          <Output data={countryData} />
        </div>
      )}
    </>
  );
}
