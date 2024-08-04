const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuoat(data))
}
// loadQuotes();
const displayQuoat = (quoat) => {
    // console.log(quoat)
    const quoats = document.getElementById('quoat')
    quoats.innerText = quoat.quote;
    // const others = quoat.quote
    // for (let data of others) {
    //     console.log(data)
    //     const h3 = document.createElement('h3');
    //     h3.innerText = data;
    //     quoats.appendChild(h3)
    // }
}

