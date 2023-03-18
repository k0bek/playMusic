import React, { useState, useEffect } from "react";
import axios from "axios";

function ShazamEvents() {
	const options = {
		method: "GET",
		url: "https://shazam-core.p.rapidapi.com/v1/charts/world",
		headers: {
			"X-RapidAPI-Key": "941649d962msh9bba0b57fdbd5e2p164e7cjsn1fe8fe65a323",
			"X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});

	return <p>xd</p>;
}

export default ShazamEvents;
