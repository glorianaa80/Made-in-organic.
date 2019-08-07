function activity(data) {
  console.log(data);

  const containerPlants = document.getElementById('container-plants');
  // KALE

  // what is___?
  const p = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  p.innerHTML = `What is ${data[0].title} ?`;
  p1.innerHTML = data[0].info.firt;
  p2.innerHTML = data[0].info.second;
  p3.innerHTML = data[0].info.third;
  p4.innerHTML = data[0].info.fourth;
  p5.innerHTML = data[0].info.fiveth;
  containerPlants.appendChild(p);
  containerPlants.appendChild(p1);
  containerPlants.appendChild(p2);
  containerPlants.appendChild(p3);
  containerPlants.appendChild(p4);
  containerPlants.appendChild(p5);
  const p6 = document.createElement('h3');
  const p7 = document.createElement('p');
  const p8 = document.createElement('p');
  const p9 = document.createElement('p');
  const p10 = document.createElement('p');
  const p11 = document.createElement('p');
  p6.innerHTML = ` ${data[0].title} Cultivation`;
  p7.innerHTML = data[0].cultivation.firt;
  p8.innerHTML = data[0].cultivation.second;
  p9.innerHTML = data[0].cultivation.third;
  p10.innerHTML = data[0].cultivation.fourth;
  p11.innerHTML = data[0].cultivation.fiveth;
  containerPlants.appendChild(p6);
  containerPlants.appendChild(p7);
  containerPlants.appendChild(p8);
  containerPlants.appendChild(p9);
  containerPlants.appendChild(p10);
  containerPlants.appendChild(p11);
}

fetch('../json/info-plants.json')
  .then(data => data.json())
  .then(json => activity(json));
