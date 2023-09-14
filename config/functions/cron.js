const fetch = require("node-fetch");

module.exports = {
  /**
   * Fetch air quality data from IQAIR API
   * for specific latitude and longitude coordinates
   * and save it to the Strapi database.
   */
  "10 * * * *": async () => {
    try {
      // API key
      const apiKey = "0d132a15-ab92-4b8b-8ff6-45d883a8b1f5";

      // API URL for Paris
      const apiUrl = `http://api.airvisual.com/v2/city?city=Paris&state=Ile-de-France&country=France&key=${apiKey}`;

      // fetch air quality data
      const response = await fetch(apiUrl);

      // Check response status
      if (!response.ok) {
        throw new Error("Failed to fetch data from iqAir API ");
      }

      // Parse as JSON
      const data = await response.json();

      let dateString = data.data.current.pollution.ts;
      const date = new Date(dateString);
      const day = date.getDate();
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Jan is 0
      const hours = date.getHours();

      // Determine if it's AM or PM
      const period = hours < 12 ? "AM" : "PM";

      const airQualityData = {
        city: data.data.city,
        state: data.data.state,
        country: data.data.country,
        timestamp: data.data.current.pollution.ts,
        aqius: data.data.current.pollution.aqius,
        mainus: data.data.current.pollution.mainus,
        aqicn: data.data.current.pollution.aqicn,
        maincn: data.data.current.pollution.maincn,
        day: day,
        month: month,
        hour: `${hours} ${period}`,
        year: year,
      };
      const savedAirQualityData = await strapi
        .query("air-quality")
        .create(airQualityData);

      console.log("Air quality data saved successfully.");
    } catch (error) {
      console.error("Error fetching and saving air quality data:", error);
    }
  },
};
