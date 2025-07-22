# **GeoHelper**

GeoHelper is a React-based web application that enables users to explore countries by searching their names. The app fetches country details—such as capital, region, languages, and population—from the **REST Countries API**, and displays beautiful scenic images for each country using the **Pexels API**.

---

## **Repository**

**GitHub Repo:** [GeoHelper-using-React](https://github.com/BirendraHansda23/GeoHelper-using-React)

---

## **Features**

- 🔍 Search for any country by name  
- 🌍 View detailed country information:
  - Capital, Region, Area, Population, Timezones
  - Languages and Currencies
- 🚩 Displays the country’s flag
- 🖼️ Shows a random scenic image (via Pexels API)
- 📜 Smooth auto-scroll to the results section

---

## **Tech Stack**

- ⚛️ **React + Vite** – Frontend framework & tooling
- 🎨 **Tailwind CSS** – Utility-first CSS styling
- 🌐 **REST Countries API** – Country data provider
- 📷 **Pexels API** – Scenic country images

---

## **Installation**

### 📥 1. Clone the Repository

```
git clone https://github.com/BirendraHansda23/GeoHelper-using-React.git

cd GeoHelper-using-React

```
### 📦 2. Install Dependencies

```
npm install

```

### 🔑 3. Add API Key
```
Create a `.env` file in the root directory and add your Pexels API key:

VITE_PEXELS_API_KEY=your_pexels_api_key_here

```
> 💡 You can get an API key by signing up at [Pexels Developer Portal](https://www.pexels.com/api/).

### 🚀 4. Start Development Server

```
npm run dev

```
---

## **Usage**

1. Type the name of a country in the input field (e.g., **India**).
2. Click the **Search** button.
3. The app will fetch data and auto-scroll to display:
   - Country flag
   - Country scenic image
   - Detailed information (capital, region, currency, etc.)


## **API References**

- 🌍 [REST Countries API](https://restcountries.com/)
- 📸 [Pexels API](https://www.pexels.com/api/)
