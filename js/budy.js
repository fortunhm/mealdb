const getApi = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddy(data))
}
getApi()

const displayBuddy = (data) =>{
    console.log(data)
    const buddys = data.results
    const buddyMake = document.getElementById('budys')
    for(const buddy of buddys){
        // console.log(buddy.name)
        const p = document.createElement('p')
        p.innerText =` Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Mail:${buddy.email}
        Gender:${buddy.gender}, Number:${buddy.phone}
        Cell:${buddy.cell}
        `;
        buddyMake.appendChild(p)
    }
}