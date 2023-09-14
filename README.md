# Air Quality API Documentation

Welcome to the documentation for the Air Quality API, a project aimed at providing real-time air quality information for cities around the world and to be more specific about Paris.
This API allows you to access air quality data for specific locations (Paris), monitor pollution levels, and integrate air quality information into your applications.

## Install and Run the Code
1) npm install
2) npm run develop
3) To manage your project 🚀, go to the administration panel at:
http://localhost:1337/admin

4) To access the server ⚡️, go to:
http://localhost:1337
5) Credentials kostismichalisuth@gmail.com - 12345678Aa

## Project Overview

The Air Quality API relies on the IQAIR platform to fetch air quality data for the Paris Zone, ensuring that you have the latest information.

### Key Features

Retrieve air quality data for the Paris Zone.
Schedule automated data updates using a CRON job every 1 minute.
Access the most polluted date and time in Paris.
Before you begin, please make sure you have obtained an API key from IQAIR, as described in the project's configuration section.

Now, let's explore how to use the API and leverage its capabilities.

#### Retrieve Air Quality Data for Paris

To access air quality data for the Paris Zone, use the following endpoint:

Endpoint: /paris

HTTP Method: GET

Description: This endpoint allows you to retrieve real-time air quality information for the Paris Zone. The response includes data such as city, state, country, timestamp, AQI (Air Quality Index) values, and more.

Request:
GET /paris


#### Retrieve Air Quality Data for nearest City

To access air quality data for the Nearest City, use the following endpoint:

Endpoint: /nearest-city

HTTP Method: GET

Description: This endpoint allows you to retrieve real-time air quality information for the nearest City.

Request:
GET /nearest-city

##### Schedule Automated Data Updates (CRON job)
To receive automated air quality data updates for the Paris Zone, a CRON job has been set up to fetch the latest information every minute. You can configure your system to consume this data periodically.


######  Access the Most Polluted Date and Time
To access the date and time when the Paris Zone experienced the highest pollution levels, use the following endpoint:

Endpoint: /most-polluted-datetime

HTTP Method: GET

Description: This endpoint provides you with the date and time of the most polluted conditions in the Paris Zone, based on historical data collected by the CRON job.

Request:
GET /most-polluted-datetime
