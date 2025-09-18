# Web-Application-using-an-API
Build a Website using an API with HTML, JavaScript, and JSON for Coursera project
# European City 7-Day Weather Forecast

## Overview

This project is built as a Coursera course project work to 

## Build a Website using an API with HTML, JavaScript, and JSON. 

This is a responsive weather forecast web application that allows users to look up 7-day weather forecasts for major European cities. It uses the 7Timer! API to fetch forecast data and displays it with city-specific icons and temperatures to provide an engaging user experience.


In this project, you will step into the shoes of web developer, helping a travel agency to increase travel booking.


## Project Scenario

The team at a European travel agency is trying to increase travel bookings. To do this, they want to provide an ability for their website visitors to look up a 7 day weather forecast for major European cities.

They want you to create a webpage that will retrieve weather forecasts from an external service. This feature will help the agency maximize their travel bookings and sales through their website.

## Project Objectives

Provide ability for website users to look up 7 day weather forecasts for major European cities

Keep website visitors on the website longer

Increase online bookings

## Your Challenge

Your challenge will be to write a webpage that uses API to retrieve weather information from an external source. To do this, you will create the user interface, send the request to the external source using JavaScript, process data received and present the information on your webpage using HTML.

In this project, we'll use 7Timer API, which is free of charge and does not require any API keys.

After you complete your project, you will share your webpage.

## Features

- Responsive UI built with Bootstrap 5
- Dynamic city selection loaded from an external CSV file (`city_coordinates.csv`)
- 7-day weather forecast display for selected city
- Weather icons corresponding to conditions like clear, cloudy, rain, snow, fog, etc.
- Clear temperature display in degrees Celsius
- Encourages user engagement with a call-to-action button to increase bookings

## Technologies Used

- HTML5 & CSS3 (Bootstrap 5)
- JavaScript (Vanilla)
- 7Timer! API for weather forecasts
- PNG weather icons stored in the `images` folder

## Project Structure
/project
    /node_modules
    /WebAppAPI
        /index.html
        /master.css
        /main.js
        /city_coordinates.csv
        /images/ (contains the backgroung images and weather icon PNG files)
    /package-lock.json
    /package.json
    /ReadMe.md

## Getting Started

### Prerequisites

- Modern web browser
- Local web server recommended (e.g., `python -m http.server` or VS Code Live Server extension)
- Internet connection to reach the 7Timer API

### Installation

1. Clone or download the repository.
2. Place the project files in your web server root or folder.
3. Start your local server and open `index.html` in your browser.
4. The page will load the city list from `city_coordinates.csv`.
5. Select a city and click "Get Forecast" to view the 7-day weather data.

### Notes

- The 7Timer API does not support HTTPS, so to avoid mixed-content errors, you may need to set up a backend proxy to fetch data securely.
- All weather icons are located in the `/images` folder and are mapped to weather condition codes in the `main.js`.
- The city list is maintained externally in `city_coordinates.csv` for easy updates without modifying code.

## How It Works

- On page load, the app fetches and parses `city_coordinates.csv` to populate the city dropdown.
- When a user submits the form, a request is sent to the 7Timer API with corresponding latitude and longitude.
- Received weather data (7-day forecast) is parsed and displayed with icons, temperature, and weather description.
- The UI encourages user engagement to increase time spent on site and bookings.

## Customization

- Add or update cities by editing the `city_coordinates.csv` file.
- Replace or add new icons to the `/images` folder and update the `iconMap` in `main.js`.
- Modify CSS styles as needed in `master.css` to match your branding.

## Troubleshooting

- If weather data does not load, check browser console for network errors.
- For HTTPS websites, implement a proxy server for the 7Timer API to prevent mixed content blocking.
- Verify the icons directory path if images don't display.

## License

This project is open-source and available for modification and distribution.

---

Enjoy building and customizing your European City 7-Day Weather Forecast app!
