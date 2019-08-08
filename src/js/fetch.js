function hola(data) {
  const heroes = data['Plantas'];
  const containerPlants = document.getElementById('container-plants');
  const H3 = document.createElement('h3');
  H3.setAttribute('class', 'info-title');
  H3.innerHTML = `What is ${heroes[0].title} ?`;
  containerPlants.appendChild(H3);
  const superPowers = heroes[0].info;
  for (let j = 0; j < superPowers.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.innerHTML = superPowers[j];
    containerPlants.appendChild(listItem);
  }
  const H3k = document.createElement('h3');
  H3k.setAttribute('class', 'info-title');
  H3k.innerHTML = `${heroes[0].title} Cultivation`;
  containerPlants.appendChild(H3k);
  const superCultivation = heroes[0].cultivation;
  for (let k = 0; k < superCultivation.length; k += 1) {
    const listItem2 = document.createElement('p');
    listItem2.innerHTML = superCultivation[k];
    containerPlants.appendChild(listItem2);
  }
  const H3l = document.createElement('h3');
  H3l.setAttribute('class', 'info-title');
  H3l.innerHTML = ` Properties ${heroes[0].title} `;
  containerPlants.appendChild(H3l);
  const superProperties = heroes[0].properties;
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'properties');
  for (let k = 0; k < superProperties.length; k += 1) {
    const listItem3 = document.createElement('li');
    listItem3.setAttribute('class', 'properties-li');
    listItem3.innerHTML = superProperties[k];
    ul.appendChild(listItem3);
    containerPlants.appendChild(ul);
  }
};


fetch('../json/info-plants.json')
  .then(data => data.json())
  .then(json => hola(json));
