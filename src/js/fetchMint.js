function mint(data) {
  const Mint = data['Plantas'];
  const containerPlantsMint = document.getElementById('container-plants-mint');
  const H3Mint = document.createElement('h3');
  H3Mint.setAttribute('class', 'info-title');
  H3Mint.innerHTML = `What is ${Mint[4].title} ?`;
  containerPlantsMint.appendChild(H3Mint);
  const superMint = Mint[4].info;
  for (let e = 0; e < superMint.length; e += 1) {
    const listItem0 = document.createElement('p');
    listItem0.innerHTML = superMint[e];
    containerPlantsMint.appendChild(listItem0);
  }
  const H3t = document.createElement('h3');
  H3t.setAttribute('class', 'info-title');
  H3t.innerHTML = `${Mint[4].title} Cultivation`;
  containerPlantsMint.appendChild(H3t);

  const superCultivationMint = Mint[4].cultivation;
  for (let w = 0; w < superCultivationMint.length; w += 1) {
    const listItem6 = document.createElement('p');
    listItem6.innerHTML = superCultivationMint[w];
    containerPlantsMint.appendChild(listItem6);
  }
  const H3h = document.createElement('h3');
  H3h.setAttribute('class', 'info-title');
  H3h.innerHTML = ` Properties ${Mint[4].title} `;
  containerPlantsMint.appendChild(H3h);
  const superPropertiesMint = Mint[4].properties;
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'properties');
  for (let l = 0; l < superPropertiesMint.length; l += 1) {
    const listItemc = document.createElement('li');
    listItemc.setAttribute('class', 'properties-li');
    listItemc.innerHTML = superPropertiesMint[l];
    ul.appendChild(listItemc);
    containerPlantsMint.appendChild(ul);
  }
}
fetch('../json/info-plants.json')
  .then(data => data.json())
  .then(json => mint(json));
