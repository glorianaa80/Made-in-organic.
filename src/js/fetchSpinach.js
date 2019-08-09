function spinach(data) {
  const Spinach = data['Plantas'];
  const containerPlantsSpinach = document.getElementById('container-plants-spinach');
  const H3Spinach = document.createElement('h3');
  H3Spinach.setAttribute('class', 'info-title');
  H3Spinach.innerHTML = `What is ${Spinach[3].title} ?`;
  containerPlantsSpinach.appendChild(H3Spinach);
  const superSpinach = Spinach[3].info;
  for (let r = 0; r < superSpinach.length; r += 1) {
    const listItem0 = document.createElement('p');
    listItem0.innerHTML = superSpinach[r];
    containerPlantsSpinach.appendChild(listItem0);
  }
  const H3t = document.createElement('h3');
  H3t.setAttribute('class', 'info-title');
  H3t.innerHTML = `${Spinach[3].title} Cultivation`;
  containerPlantsSpinach.appendChild(H3t);

  const superCultivationSpinach = Spinach[3].cultivation;
  for (let w = 0; w < superCultivationSpinach.length; w += 1) {
    const listItem6 = document.createElement('p');
    listItem6.innerHTML = superCultivationSpinach[w];
    containerPlantsSpinach.appendChild(listItem6);
  }
  const H3h = document.createElement('h3');
  H3h.setAttribute('class', 'info-title');
  H3h.innerHTML = ` Properties ${Spinach[3].title} `;
  containerPlantsSpinach.appendChild(H3h);
  const superPropertiesSpinach = Spinach[3].properties;
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'properties');
  for (let plants = 0; plants < superPropertiesSpinach.length; plants += 1) {
    const listItemc = document.createElement('li');
    listItemc.setAttribute('class', 'properties-li');
    listItemc.innerHTML = superPropertiesSpinach[plants];
    ul.appendChild(listItemc);
    containerPlantsSpinach.appendChild(ul);
  }
}
fetch('../json/info-plants.json')
  .then(data => data.json())
  .then(json => spinach(json));
