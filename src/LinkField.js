
// let x
// const shortBtn = document.querySelector(".btn-shorten");
// shortBtn.addEventListener("click", async() => {
// const linkField = document.querySelector(".link-field").value ;


// const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
// const options = {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'X-RapidAPI-Key': 'd88b849a4cmsh04efd9b18ada8aep1d098djsnc2838aa47965',
//     'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
//   },
//   body: new URLSearchParams({
//     url: `${linkField}`
//   })
// };

// try {
//     const response = await fetch(url, options);
//     const data = await response.json(); 
//     x = data.result_url
// } catch (error) {
//     x = "Invalid or blank url"
//     console.error(error);
// }

//   const existingDiv = document.querySelector('.link-block');
//   existingDiv.style.opacity = "1";
//   existingDiv.innerHTML = "<p>"+x+"</p>"

// });



function LinkField(){
    return (
        <>
            <div className="link-sec col-lg-8 col-sm-10 mx-auto py-5 px-5 row">
                <input type="text" placeholder="Enter your link" className="link-field col-lg-10 col-sm-12 py-3 px-3"/>
                <button type="text" className="btn btn-shorten py-3 px-3 col-lg-2 col-sm-12 mt-sm-4 mt-lg-0 text-white">Shorten It!</button>
            </div>
            <div className="link-block  col-lg-8 col-sm-10 mx-auto px-5 py-4 row vis-hidden"></div>
        </>
    );
}

export default LinkField