import { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';

    function LinkField() {
    const [link, setLink] = useState("");
    const [shortLink, setShortLink] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const API_KEY = "d88b849a4cmsh04efd9b18ada8aep1d098djsnc2838aa47965"; // Replace with your RapidAPI key
    const API_URL = "https://url-shortener-service.p.rapidapi.com/shorten";

    async function shortenLink(event) {
    event.preventDefault(); // Prevent default form submission

    if (!link) {
        setErrorMessage("Please enter a URL to shorten.");
        // alert(errorMessage)
        <Alert severity="error">{errorMessage}</Alert>
        return; // Early return if no link provided
    }

    try {
        const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
        },
        body: new URLSearchParams({ url: link }),
        });

        const data = await response.json();
        setShortLink(data.result_url);
        setErrorMessage(""); // Clear any previous error messages
    } catch (error) {
        alert(`Error fetching shortened link:${error}`);
        setErrorMessage("An error occurred. Please try again later.");
    } finally {
        // Update visibility of the result container here (optional)
    }
    }

  // Update the result container visibility based on shortLink
    useEffect(() => {
    const existingDiv = document.querySelector('.link-block');
    if (shortLink) {
        existingDiv.style.opacity = "1";
        existingDiv.innerHTML = `<p>${shortLink}</p>`;
    } else {
        existingDiv.style.opacity = "0";
        existingDiv.innerHTML = "";
    }
    }, [shortLink]);

    return (
    <>
        <div className="link-sec col-lg-8 col-sm-10 mx-auto py-5 px-5 row">
        <form onSubmit={shortenLink}>
            <input type="text" placeholder="Enter your link" className="link-field col-12 py-3 px-3" value={link} onChange={(e) => setLink(e.target.value)} />
            <button type="submit" className="btn btn-shorten py-3 px-3 col-12 mt-sm-4 mt-lg-0 text-white">
            Shorten It!
            </button>
        </form>
        </div>
        <div className="link-block col-lg-8 col-sm-10 mx-auto px-5 py-4 row vis-hidden"></div>
    </>
    );
}

export default LinkField;
