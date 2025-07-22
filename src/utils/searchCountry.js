export default async function searchCountry(countryName) {
  function isValidCountryName(name) {
    const regex = /^[A-Za-zÀ-ž\s'-]+$/;
    return regex.test(name.trim());
  }

  if (!isValidCountryName(countryName)) {
    console.error("Invalid country name");
    return null;
  }

  try {
    const apiUrl = `https://restcountries.com/v3.1/name/${encodeURIComponent(
      countryName
    )}?fullText=true`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const country = data[0];

    const countryData = {
      Name: country.name.common,
      Capital: country.capital?.[0] || "N/A",
      Region: country.region,
      Area: country.area.toLocaleString(),
      Population: country.population.toLocaleString(),
      Timezone: country.timezones?.[0] || "N/A",
      Languages: country.languages
        ? Object.values(country.languages).join(", ")
        : "N/A",
      Currencies: country.currencies
        ? Object.values(country.currencies)
            .map((curr) => curr.name)
            .join(", ")
        : "N/A",
    };

    const flag = {
      src: country.flags.svg,
      alt: `Flag of ${country.name.common}`,
    };

    const images = await fetchCountryImages(country.name.common);
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageData = {
      src: images[randomIndex] || "/fallback-image.jpg", // fallback if no image
      alt: `Scenic view of ${country.name.common}`,
    };

    return {
      ...countryData,
      flag,
      image: imageData,
    };
  } catch (error) {
    console.error("Error fetching country:", error);
    return null;
  }
}

async function fetchCountryImages(countryName) {
  const query = `famous places in ${countryName}`;
  const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
  console.log(apiKey);
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}&per_page=10`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const data = await response.json();
    return data.photos.map((photo) => photo.src.landscape);
  } catch (error) {
    console.error("Error fetching country images:", error);
    return [];
  }
}
