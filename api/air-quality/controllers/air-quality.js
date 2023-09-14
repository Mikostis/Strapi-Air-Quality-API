"use strict";
const fetch = require("node-fetch");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findMostPolluted(ctx) {
    try {
      // Query the "AirQuality" collection and sort by aqius in descending order to get the most polluted entry
      const mostPollutedData = await strapi.query("air-quality").find({
        _sort: "aqius:desc",
        _sort: "aqicn:desc",
      });

      if (!mostPollutedData || mostPollutedData.length === 0) {
        return ctx.throw(404, "No data found.");
      }

      // Extract the date and time from the most polluted entry
      const dateTime = mostPollutedData[0].timestamp;

      console.log(`Most polluted data at ${dateTime}`);

      ctx.send(
        `Date and Time where the Paris zone is the most polluted is on: ${mostPollutedData[0].day}/${mostPollutedData[0].month}/${mostPollutedData[0].year},at ${mostPollutedData[0].hour} o'clock`
      );
    } catch (e) {
      console.log(e);
      return ctx.response.badRequest(e.toString());
    }
  },
  async fetchParisAirPollution(ctx) {
    try {
      const apiKey = "0d132a15-ab92-4b8b-8ff6-45d883a8b1f5";
      const apiUrl = `http://api.airvisual.com/v2/city?city=Berlin&state=Brandenburg&country=Germany&key=${apiKey}`;

      // fetch air quality data
      const response = await fetch(apiUrl);

      // Check response status
      if (!response.ok) {
        throw new Error("Failed to fetch data from iqAir API ");
      } else {
        const data = await response.json();
        ctx.send(data);
      }
    } catch (e) {
      console.log(e);
      return ctx.response.badRequest(e.toString());
    }
  },
  async fetchNearestCity(ctx) {
    try {
      const apiKey = "0d132a15-ab92-4b8b-8ff6-45d883a8b1f5";
      const apiUrl = `http://api.airvisual.com/v2/nearest_city?key=${apiKey}`;

      // fetch air quality data of the nearest City
      const response = await fetch(apiUrl);

      // Check response status
      if (!response.ok) {
        throw new Error("Failed to fetch data from iqAir API ");
      } else {
        const data = await response.json();
        ctx.send(data);
      }
    } catch (e) {
      console.log(e);
      return ctx.response.badRequest(e.toString());
    }
  },
};
