function rosemary(data) {
  const Rosemay = data.Plantas;
  const containerPlantsRosemay = document.getElementById('container-plants-rosemary');
  const H3Rosemay = document.createElement('h3');
  H3Rosemay.setAttribute('class', 'info-title');
  H3Rosemay.innerHTML = `What is ${Rosemay[7].title} ?`;
  containerPlantsRosemay.appendChild(H3Rosemay);
  const superRosemay = Rosemay[7].info;
  for (let f = 0; f < superRosemay.length; f += 1) {
    const listItem0 = document.createElement('p');
    listItem0.innerHTML = superRosemay[f];
    containerPlantsRosemay.appendChild(listItem0);
  }
  const H3t = document.createElement('h3');
  H3t.setAttribute('class', 'info-title');
  H3t.innerHTML = `${Rosemay[7].title} Cultivation`;
  containerPlantsRosemay.appendChild(H3t);

  const superCultivationRosemay = Rosemay[7].cultivation;
  for (let w = 0; w < superCultivationRosemay.length; w += 1) {
    const listItem6 = document.createElement('p');
    listItem6.innerHTML = superCultivationRosemay[w];
    containerPlantsRosemay.appendChild(listItem6);
  }
  const H3h = document.createElement('h3');
  H3h.setAttribute('class', 'info-title');
  H3h.innerHTML = ` Properties ${Rosemay[7].title} `;
  containerPlantsRosemay.appendChild(H3h);
  const superPropertiesRosemay = Rosemay[7].properties;
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'properties');
  for (let l = 0; l < superPropertiesRosemay.length; l += 1) {
    const listItemc = document.createElement('li');
    listItemc.setAttribute('class', 'properties-li');
    listItemc.innerHTML = superPropertiesRosemay[l];
    ul.appendChild(listItemc);
    containerPlantsRosemay.appendChild(ul);
  }
}
fetch('../json/info-plants.json')
  .then(data => data.json())
  .then(json => rosemary(json));
