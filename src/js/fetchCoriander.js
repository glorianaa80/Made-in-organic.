function coriander(data) {
  const Coriander = data['Plantas'];
  const containerPlantsCoriander = document.getElementById('container-plants-coriander');
  const H3Coriander = document.createElement('h3');
  H3Coriander.setAttribute('class', 'info-title');
  H3Coriander.innerHTML = `What is ${Coriander[1].title} ?`;
  containerPlantsCoriander.appendChild(H3Coriander);
  const superCoriander = Coriander[1].infoCoriander;
  for (let c = 0; c < superCoriander.length; c += 1) {
    const listItem0 = document.createElement('p');
    listItem0.innerHTML = superCoriander[c];
    containerPlantsCoriander.appendChild(listItem0);
  }
  const H3c = document.createElement('h3');
  H3c.setAttribute('class', 'info-title');
  H3c.innerHTML = `${Coriander[1].title} Cultivation`;
  containerPlantsCoriander.appendChild(H3c);

  const superCultivationCoriander = Coriander[1].cultivationCoriander;
  for (let q = 0; q < superCultivationCoriander.length; q += 1) {
    const listItem5 = document.createElement('p');
    listItem5.innerHTML = superCultivationCoriander[q];
    containerPlantsCoriander.appendChild(listItem5);
  }
  const H3h = document.createElement('h3');
  H3h.setAttribute('class', 'info-title');
  H3h.innerHTML = ` Properties ${Coriander[1].title} `;
  containerPlantsCoriander.appendChild(H3h);
  const superPropertiesCoriander = Coriander[1].properties;
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'properties');
  for (let b = 0; b < superPropertiesCoriander.length; b += 1) {
    const listItemc = document.createElement('li');
    listItemc.setAttribute('class', 'properties-li');
    listItemc.innerHTML = superPropertiesCoriander[b];
    ul.appendChild(listItemc);
    containerPlantsCoriander.appendChild(ul);
  }
}
fetch('../json/info-plants.json')
  .then(data => data.json())
  .then(json => coriander(json));
