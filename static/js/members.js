// Array
Devo= [
    {name: 'Koen', lastname: 'Hillbrands', age: '22', city: 'Deurne', about: 'wasmachine', link: 'https://i519462.hera.fhict.nl/', img: 'https://i.pinimg.com/736x/15/5e/95/155e95a168216436c390e57172d3eed2.jpg'},
    {name: 'Maks', lastname: 'Rechnio', age: '20', city: 'Wroclaw', about: 'dishwasher/helicopter',link: 'http://chalepeaddict.eu/', img: 'https://cdn.shopify.com/s/files/1/0745/0975/articles/gigachad_1068x.jpg?v=1667928905'},
    {name: 'Jasper', lastname: 'Van den Heuvel', age: '20', city: 'Eindhoven', about: 'chair', link: 'https://jasper20037.github.io/Portfolio_S2/Index.html', img: 'https://cdn.shopify.com/s/files/1/0745/0975/articles/gigachad_1068x.jpg?v=1667928905'},
]

// function

function getGroup(group) {
    const h1=document.createElement('h1');
    h1.textContent=group.name;
    
    const p=document.createElement('p');
    p.innerHTML=`${group.name} ${group.lastname} is ${group.age} years old and lives in ${group.city}, ${group.name} identifies as an ${group.gender}. ${group.name} made a personal portfolio, you can view it by clicking `;

    const link=document.createElement('a');
    link.setAttribute('href', `${group.link}`)
    link.setAttribute('target', '_blank')
    link.textContent='here'; 

    const img=document.createElement('IMG');
    img.setAttribute("src", `${group.img}`);
    img.setAttribute("width", "304");
    img.setAttribute("height", "228");
    img.setAttribute("alt", `${group.name}`);


    const sec=document.createElement('section');
    sec.classList.add('group');
    sec.appendChild(h1);
    sec.appendChild(p);
    p.appendChild(link)
    sec.appendChild(img)
    h1.addEventListener('click', memberClicked);
    return sec
}

document.getElementById("about-maks").innerHTML = {}

// Create
Devo.forEach(group=>
    document.body.appendChild(getGroup(group))
)