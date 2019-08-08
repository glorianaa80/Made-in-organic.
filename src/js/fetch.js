// function activity(data) {
//   console.log(data);
//   const containerPlants = document.getElementById('container-plants');
//   // KALE
//   const h3 = document.createElement('h3');
//   h3.setAttribute('class', 'info-title');
//   const p1 = document.createElement('p');
//   const p2 = document.createElement('p');
//   const p3 = document.createElement('p');
//   const p4 = document.createElement('p');
//   const p5 = document.createElement('p');
//   h3.innerHTML = `What is ${data[0].title} ?`;
//   p1.innerHTML = data[0].info.firt;
//   p2.innerHTML = data[0].info.second;
//   p3.innerHTML = data[0].info.third;
//   p4.innerHTML = data[0].info.fourth;
//   p5.innerHTML = data[0].info.fiveth;
//   containerPlants.appendChild(h3);
//   containerPlants.appendChild(p1);
//   containerPlants.appendChild(p2);
//   containerPlants.appendChild(p3);
//   containerPlants.appendChild(p4);
//   containerPlants.appendChild(p5);
//   const h32 = document.createElement('h3');
//   h32.setAttribute('class', 'info-title');
//   const p7 = document.createElement('p');
//   const p8 = document.createElement('p');
//   const p9 = document.createElement('p');
//   const p10 = document.createElement('p');
//   const p11 = document.createElement('p');
//   h32.innerHTML = `${data[0].title} Cultivation`;
//   p7.innerHTML = data[0].cultivation.firt;
//   p8.innerHTML = data[0].cultivation.second;
//   p9.innerHTML = data[0].cultivation.third;
//   p10.innerHTML = data[0].cultivation.fourth;
//   p11.innerHTML = data[0].cultivation.fiveth;
//   containerPlants.appendChild(h32);
//   containerPlants.appendChild(p7);
//   containerPlants.appendChild(p8);
//   containerPlants.appendChild(p9);
//   containerPlants.appendChild(p10);
//   containerPlants.appendChild(p11);
//   const h34 = document.createElement('h3');
//   h34.setAttribute('class', 'info-title');
//   const ul = document.createElement('ul');
//   ul.setAttribute('class', 'properties');
//   const li1 = document.createElement('li');
//   const li2 = document.createElement('li');
//   const li3 = document.createElement('li');
//   const li4 = document.createElement('li');
//   const li5 = document.createElement('li');
//   const li6 = document.createElement('li');
//   const li7 = document.createElement('li');
//   const li8 = document.createElement('li');
//   li1.setAttribute('class', 'properties-li');
//   li2.setAttribute('class', 'properties-li');
//   li3.setAttribute('class', 'properties-li');
//   li4.setAttribute('class', 'properties-li');
//   li5.setAttribute('class', 'properties-li');
//   li6.setAttribute('class', 'properties-li');
//   li7.setAttribute('class', 'properties-li');
//   li8.setAttribute('class', 'properties-li');
//   h34.innerHTML = `Properties ${data[0].title}`;
//   li1.innerHTML = data[0].properties.firt;
//   li2.innerHTML = data[0].properties.second;
//   li3.innerHTML = data[0].properties.third;
//   li4.innerHTML = data[0].properties.fourth;
//   li5.innerHTML = data[0].properties.fiveth;
//   li6.innerHTML = data[0].properties.sixth;
//   li7.innerHTML = data[0].properties.seventh;
//   li8.innerHTML = data[0].properties.eighth;
//   containerPlants.appendChild(h34);
//   ul.appendChild(li1);
//   ul.appendChild(li2);
//   ul.appendChild(li3);
//   ul.appendChild(li4);
//   ul.appendChild(li5);
//   ul.appendChild(li6);
//   ul.appendChild(li7);
//   ul.appendChild(li8);
//   containerPlants.appendChild(ul);
//   const btnRecipe = document.createElement('button');
//   btnRecipe.setAttribute('class', 'btn-r');
//   btnRecipe.innerHTML = 'recipe';
//   const btnYourRecipe = document.createElement('button');
//   btnYourRecipe.setAttribute('class', 'btn');
//   btnYourRecipe.innerHTML = 'add ypur recipes';
//   containerPlants.appendChild(btnRecipe);
//   containerPlants.appendChild(btnYourRecipe);
// }

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
}

fetch('../json/info-plants.json')
  .then(data => data.json())
  .then(json => hola(json));
