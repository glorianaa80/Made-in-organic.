function thyme(data) {
  const Thyme = data.Plantas;
  const containerPlantsThyme = document.getElementById('container-plants-thyme');
  const H3Thyme = document.createElement('h3');
  H3Thyme.setAttribute('class', 'info-title');
  H3Thyme.innerHTML = `What is ${Thyme[2].title} ?`;
  containerPlantsThyme.appendChild(H3Thyme);
  const superThyme = Thyme[2].info;
  for (let a = 0; a < superThyme.length; a += 1) {
    const listItem0 = document.createElement('p');
    listItem0.innerHTML = superThyme[a];
    containerPlantsThyme.appendChild(listItem0);
  }
  const H3t = document.createElement('h3');
  H3t.setAttribute('class', 'info-title');
  H3t.innerHTML = `${Thyme[2].title} Cultivation`;
  containerPlantsThyme.appendChild(H3t);

  const superCultivationThyme = Thyme[2].cultivation;
  for (let w = 0; w < superCultivationThyme.length; w += 1) {
    const listItem6 = document.createElement('p');
    listItem6.innerHTML = superCultivationThyme[w];
    containerPlantsThyme.appendChild(listItem6);
  }
  const H3h = document.createElement('h3');
  H3h.setAttribute('class', 'info-title');
  H3h.innerHTML = ` Properties ${Thyme[2].title} `;
  containerPlantsThyme.appendChild(H3h);
  const superPropertiesThyme = Thyme[2].properties;
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'properties');
  for (let l = 0; l < superPropertiesThyme.length; l += 1) {
    const listItemc = document.createElement('li');
    listItemc.setAttribute('class', 'properties-li');
    listItemc.innerHTML = superPropertiesThyme[l];
    ul.appendChild(listItemc);
    containerPlantsThyme.appendChild(ul);
  }
}
fetch('../json/info-plants.json')
  .then(data => data.json())
  .then(json => thyme(json));
