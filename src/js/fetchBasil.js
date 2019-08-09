function basil(data) {
  const Basil = data['Plantas'];
  const containerPlantsBasil = document.getElementById('container-plants-basil');
  const H3Basil = document.createElement('h3');
  H3Basil.setAttribute('class', 'info-title');
  H3Basil.innerHTML = `What is ${Basil[6].title} ?`;
  containerPlantsBasil.appendChild(H3Basil);
  const superBasil = Basil[6].info;
  for (let g = 0; g < superBasil.length; g += 1) {
    const listItem0 = document.createElement('p');
    listItem0.innerHTML = superBasil[g];
    containerPlantsBasil.appendChild(listItem0);
  }
  const H3t = document.createElement('h3');
  H3t.setAttribute('class', 'info-title');
  H3t.innerHTML = `${Basil[6].title} Cultivation`;
  containerPlantsBasil.appendChild(H3t);

  const superCultivationBasil = Basil[6].cultivation;
  for (let w = 0; w < superCultivationBasil.length; w += 1) {
    const listItem6 = document.createElement('p');
    listItem6.innerHTML = superCultivationBasil[w];
    containerPlantsBasil.appendChild(listItem6);
  }
  const H3h = document.createElement('h3');
  H3h.setAttribute('class', 'info-title');
  H3h.innerHTML = ` Properties ${Basil[6].title} `;
  containerPlantsBasil.appendChild(H3h);
  const superPropertiesBasil = Basil[6].properties;
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'properties');
  for (let l = 0; l < superPropertiesBasil.length; l += 1) {
    const listItemc = document.createElement('li');
    listItemc.setAttribute('class', 'properties-li');
    listItemc.innerHTML = superPropertiesBasil[l];
    ul.appendChild(listItemc);
    containerPlantsBasil.appendChild(ul);
  }
}
fetch('../json/info-plants.json')
  .then(data => data.json())
  .then(json => basil(json));
