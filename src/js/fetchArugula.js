function arugula(data) {
  const Arugula = data.Plantas;
  const containerPlantsArugula = document.getElementById('container-plants-arugula');
  const H3Arugula = document.createElement('h3');
  H3Arugula.setAttribute('class', 'info-title');
  H3Arugula.innerHTML = `What is ${Arugula[5].title} ?`;
  containerPlantsArugula.appendChild(H3Arugula);
  const superArugula = Arugula[5].info;
  for (let d = 0; d < superArugula.length; d += 1) {
    const listItem0 = document.createElement('p');
    listItem0.innerHTML = superArugula[d];
    containerPlantsArugula.appendChild(listItem0);
  }
  const H3t = document.createElement('h3');
  H3t.setAttribute('class', 'info-title');
  H3t.innerHTML = `${Arugula[5].title} Cultivation`;
  containerPlantsArugula.appendChild(H3t);

  const superCultivationArugula = Arugula[5].cultivation;
  for (let w = 0; w < superCultivationArugula.length; w += 1) {
    const listItem6 = document.createElement('p');
    listItem6.innerHTML = superCultivationArugula[w];
    containerPlantsArugula.appendChild(listItem6);
  }
  const H3h = document.createElement('h3');
  H3h.setAttribute('class', 'info-title');
  H3h.innerHTML = ` Properties ${Arugula[5].title} `;
  containerPlantsArugula.appendChild(H3h);
  const superPropertiesArugula = Arugula[5].properties;
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'properties');
  for (let l = 0; l < superPropertiesArugula.length; l += 1) {
    const listItemc = document.createElement('li');
    listItemc.setAttribute('class', 'properties-li');
    listItemc.innerHTML = superPropertiesArugula[l];
    ul.appendChild(listItemc);
    containerPlantsArugula.appendChild(ul);
  }
}
fetch('../json/info-plants.json')
  .then(data => data.json())
  .then(json => arugula(json));
