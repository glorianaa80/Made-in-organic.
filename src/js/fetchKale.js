function kale(data) {
  const Kale = data.Plantas;
  const containerPlants = document.getElementById('container-plants-kale');
  const H3Kale = document.createElement('h3');
  H3Kale.setAttribute('class', 'info-title');
  H3Kale.innerHTML = `What is ${Kale[0].title} ?`;
  containerPlants.appendChild(H3Kale);
  const superKale = Kale[0].infoKale;
  for (let j = 0; j < superKale.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.innerHTML = superKale[j];
    containerPlants.appendChild(listItem);
  }
  const H3k = document.createElement('h3');
  H3k.setAttribute('class', 'info-title');
  H3k.innerHTML = `${Kale[0].title} Cultivation`;
  containerPlants.appendChild(H3k);
  const superCultivation = Kale[0].cultivation;
  for (let k = 0; k < superCultivation.length; k += 1) {
    const listItem2 = document.createElement('p');
    listItem2.innerHTML = superCultivation[k];
    containerPlants.appendChild(listItem2);
  }
  const H3l = document.createElement('h3');
  H3l.setAttribute('class', 'info-title');
  H3l.innerHTML = ` Properties ${Kale[0].title} `;
  containerPlants.appendChild(H3l);
  const superProperties = Kale[0].properties;
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'properties');
  for (let k = 0; k < superProperties.length; k += 1) {
    const listItem3 = document.createElement('li');
    listItem3.setAttribute('class', 'properties-li');
    listItem3.innerHTML = superProperties[k];
    ul.appendChild(listItem3);
    containerPlants.appendChild(ul);
  }
}

fetch('../json/info-plants.json')
  .then(data => data.json())
  .then(json => kale(json));
