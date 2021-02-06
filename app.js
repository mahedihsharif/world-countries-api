fetch('https://restcountries.eu/rest/v2/all')
.then(res=>res.json())
.then(data=> displayCountries(data))

    const displayCountries=(countries=>{
    const countriesDiv=document.getElementById('container');
    countries.forEach(country => {
        const countryDiv=document.createElement('div');
        countryDiv.className='country';
        const countryInfo=`
        <h3 class="country-container">${country.name}</h3>
        <p class="capital-container">${country.capital}<p>
        <button onClick="displayCountriesDetails('${country.name}')" class="btn">Details</button>
    `
    countryDiv.innerHTML=countryInfo;
    countriesDiv.appendChild(countryDiv);

    })
})

const displayCountriesDetails=(countriesInfo=>{
    const url=`https://restcountries.eu/rest/v2/name/${countriesInfo}`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>displayRenderDetails(data[0]))
})

const displayRenderDetails=(info=>{
    const detailsDiv=document.getElementById('details');
    const detailsInfo=`
        <h1 class="country-container">${info.name}</h1>
        <p class="capital-container">Population: ${info.population}</p>
        <p class="capital-container">Area: ${info.area}</p>
        <img src="${info.flag}">
    `;
    detailsDiv.innerHTML=detailsInfo;
     
})








    //using forLoop.
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv=document.createElement('div');
    //     countryDiv.className='country';


        //Normal call
        // const countryName=document.createElement('h3');
        // countryName.innerText=country.name;

        // const countryCapital=document.createElement('p');
        // countryCapital.innerText=country.capital;

        // countriesDiv.appendChild(countryName);

        // Dynamic call.
     

 