
const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountry()

const displayCountries = (counties) => {
    // for (const county of counties){
    //     console.log(county)
    // }
    const countryAdd = document.getElementById('country')
    counties.forEach(county => {
        // console.log(county)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
            <h3>${county.name.common}</h3>
            <h4>${county.capital}</h4>
            <p>${county.maps.googleMaps}</p>
            <button onclick="loadCountryName('${county.name.common}')">Details</button>
        `
        // const doc = document.createElement('h3')
        // doc.innerText = county.name.common
        // div.appendChild(doc)
        // const h4 = document.createElement('h4')
        // h4.innerText = county.capital
        // div.appendChild(h4)
        // const p = document.createElement('p');
        // p.innerText = county.maps.googleMaps
        // div.appendChild(p)
        countryAdd.appendChild(div)
    })
}

const loadCountryName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country)
    const div = document.getElementById('display-detail')
    div.innerHTML = `
        <h4>${country.name.common}</h4>
        <p>population : ${country.population}</p>
        <img src="${country.flags.png}">
    `
}
