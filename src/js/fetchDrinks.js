function drinks(data) {
  // RECIPE KALE
  const receta = data.Drinks;
  const containerRecipe = document.getElementById('container-recipe');
  const containerRecipeK = document.getElementById('drinks-kale');
  const containerRecipeC = document.getElementById('drinks-coriander');
  const containerRecipeT = document.getElementById('drinks-thyme');
  const containerRecipeS = document.getElementById('drinks-spinach');
  const containerRecipeM = document.getElementById('drinks-mint');
  const containerRecipeA = document.getElementById('drinks-arugula');
  const containerRecipeB = document.getElementById('drinks-basil');
  const containerRecipeR = document.getElementById('drinks-rosemary');

  const t = document.createElement('h2');
  t.innerHTML = receta[0].tittle;
  t.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeK.appendChild(t);

  const H3Kale = document.createElement('h3');
  H3Kale.innerHTML = 'INGREDIENTS';
  H3Kale.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeK.appendChild(H3Kale);
  const superKale = receta[0].ingredients;
  for (let j = 0; j < superKale.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superKale[j];
    containerRecipeK.appendChild(listItem);
  }
  const H3k = document.createElement('h3');
  H3k.innerHTML = 'PREPARATION';
  H3k.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeK.appendChild(H3k);
  const superPreparation = receta[0].preparation;
  for (let j = 0; j < superPreparation.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superPreparation[j];
    containerRecipeK.appendChild(listItem);
  }
  const H3a = document.createElement('h3');
  const superKalee = receta[0].final;
  H3a.innerHTML = superKalee;
  H3a.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeK.appendChild(H3a);

  const img = document.createElement('img');
  const superimg = receta[0].img;
  img.setAttribute('src', superimg);
  img.setAttribute('class', 'img-recipes');
  containerRecipeK.appendChild(img);

  const btn = document.createElement('button');
  btn.setAttribute('class', 'btn-recipes');
  btn.innerHTML = 'ADD YOUR RECIPE';
  containerRecipeK.appendChild(btn);
  containerRecipe.appendChild(containerRecipeK);

  // RECIPE CORIANDER
  const h2C = document.createElement('h2');
  h2C.innerHTML = receta[1].tittle;
  h2C.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeC.appendChild(h2C);
  const h3c = document.createElement('h3');
  h3c.innerHTML = 'INGREDIENTS';
  h3c.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeC.appendChild(h3c);
  const superC = receta[1].ingredients;
  for (let j = 0; j < superC.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superC[j];
    containerRecipeC.appendChild(listItem);
  }
  const h3r = document.createElement('h3');
  h3r.innerHTML = 'PREPARATION';
  h3r.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeC.appendChild(h3r);
  const superPreparationC = receta[1].preparation;
  for (let j = 0; j < superPreparationC.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superPreparationC[j];
    containerRecipeC.appendChild(listItem);
  }
  const h3q = document.createElement('h3');
  const superCorianderr = receta[0].final;
  h3q.innerHTML = superCorianderr;
  h3q.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeC.appendChild(h3q);
  const imgC = document.createElement('img');
  const superimgC = receta[1].img;
  imgC.setAttribute('src', superimgC);
  imgC.setAttribute('class', 'img-recipes');
  containerRecipeC.appendChild(imgC);
  const btnC = document.createElement('button');
  btnC.setAttribute('class', 'btn-recipes');
  btnC.innerHTML = 'ADD YOUR RECIPE';
  containerRecipeC.appendChild(btnC);
  containerRecipe.appendChild(containerRecipeC);


  // RECIPE THYME
  const h2T = document.createElement('h2');
  h2T.innerHTML = receta[2].tittle;
  h2T.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeT.appendChild(h2T);
  const h3t = document.createElement('h3');
  h3t.innerHTML = 'INGREDIENTS';
  h3t.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeT.appendChild(h3t);
  const superT = receta[2].ingredients;
  for (let h = 0; h < superT.length; h += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superT[h];
    containerRecipeT.appendChild(listItem);
  }
  const h3w = document.createElement('h3');
  h3w.innerHTML = 'PREPARATION';
  h3w.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeT.appendChild(h3w);
  const superPreparationT = receta[2].preparation;
  for (let j = 0; j < superPreparationT.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superPreparationT[j];
    containerRecipeT.appendChild(listItem);
  }
  const h3e = document.createElement('h3');
  const superThyme = receta[0].final;
  h3e.innerHTML = superThyme;
  h3e.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeT.appendChild(h3e);
  const imgT = document.createElement('img');
  const superimgT = receta[2].img;
  imgT.setAttribute('src', superimgT);
  imgT.setAttribute('class', 'img-recipes');
  containerRecipeT.appendChild(imgT);
  const btnT = document.createElement('button');
  btnT.setAttribute('class', 'btn-recipes');
  btnT.innerHTML = 'ADD YOUR RECIPE';
  containerRecipeT.appendChild(btnT);
  containerRecipe.appendChild(containerRecipeT);

  // RECIPE SPINACH
  const h2S = document.createElement('h2');
  h2S.innerHTML = receta[3].tittle;
  h2S.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeS.appendChild(h2S);
  const h3s = document.createElement('h3');
  h3s.innerHTML = 'INGREDIENTS';
  h3s.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeS.appendChild(h3s);
  const superS = receta[3].ingredients;
  for (let e = 0; e < superS.length; e += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superS[e];
    containerRecipeS.appendChild(listItem);
  }
  const h3y = document.createElement('h3');
  h3y.innerHTML = 'PREPARATION';
  h3y.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeS.appendChild(h3y);
  const superPreparationS = receta[3].preparation;
  for (let j = 0; j < superPreparationS.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superPreparationS[j];
    containerRecipeS.appendChild(listItem);
  }
  const h3i = document.createElement('h3');
  const superSpinach = receta[0].final;
  h3i.innerHTML = superSpinach;
  h3i.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeS.appendChild(h3i);
  const imgS = document.createElement('img');
  const superimgS = receta[3].img;
  imgS.setAttribute('src', superimgS);
  imgS.setAttribute('class', 'img-recipes');
  containerRecipeS.appendChild(imgS);
  const btnS = document.createElement('button');
  btnS.setAttribute('class', 'btn-recipes');
  btnS.innerHTML = 'ADD YOUR RECIPE';
  containerRecipeS.appendChild(btnS);
  containerRecipe.appendChild(containerRecipeS);

  // RECIPE MINT
  const h2M = document.createElement('h2');
  h2M.innerHTML = receta[4].tittle;
  h2M.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeM.appendChild(h2M);
  const h3m = document.createElement('h3');
  h3m.innerHTML = 'INGREDIENTS';
  h3m.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeM.appendChild(h3m);
  const superM = receta[4].ingredients;
  for (let e = 0; e < superM.length; e += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superM[e];
    containerRecipeM.appendChild(listItem);
  }
  const h3ñ = document.createElement('h3');
  h3ñ.innerHTML = 'PREPARATION';
  h3ñ.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeM.appendChild(h3ñ);
  const superPreparationM = receta[4].preparation;
  for (let j = 0; j < superPreparationM.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superPreparationM[j];
    containerRecipeM.appendChild(listItem);
  }
  const h3o = document.createElement('h3');
  const superMint = receta[0].final;
  h3o.innerHTML = superMint;
  h3o.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeM.appendChild(h3o);
  const imgM = document.createElement('img');
  const superimgM = receta[4].img;
  imgM.setAttribute('src', superimgM);
  imgM.setAttribute('class', 'img-recipes');
  containerRecipeM.appendChild(imgM);
  const btnM = document.createElement('button');
  btnM.setAttribute('class', 'btn-recipes');
  btnM.innerHTML = 'ADD YOUR RECIPE';
  containerRecipeM.appendChild(btnM);
  containerRecipe.appendChild(containerRecipeM);

  // RECIPE ARUGULA
  const h2A = document.createElement('h2');
  h2A.innerHTML = receta[5].tittle;
  h2A.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeA.appendChild(h2A);
  const h3A = document.createElement('h3');
  h3A.innerHTML = 'INGREDIENTS';
  h3A.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeA.appendChild(h3A);
  const superA = receta[5].ingredients;
  for (let e = 0; e < superA.length; e += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superA[e];
    containerRecipeA.appendChild(listItem);
  }
  const h3H = document.createElement('h3');
  h3H.innerHTML = 'PREPARATION';
  h3H.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeA.appendChild(h3H);
  const superPreparationA = receta[5].preparation;
  for (let j = 0; j < superPreparationA.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superPreparationA[j];
    containerRecipeA.appendChild(listItem);
  }
  const h3F = document.createElement('h3');
  const superArugula = receta[0].final;
  h3F.innerHTML = superArugula;
  h3F.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeA.appendChild(h3F);
  const imgA = document.createElement('img');
  const superimgA = receta[5].img;
  imgA.setAttribute('src', superimgA);
  imgA.setAttribute('class', 'img-recipes');
  containerRecipeA.appendChild(imgA);
  const btnA = document.createElement('button');
  btnA.setAttribute('class', 'btn-recipes');
  btnA.innerHTML = 'ADD YOUR RECIPE';
  containerRecipeA.appendChild(btnA);
  containerRecipe.appendChild(containerRecipeA);

  // RECIPE BASIL
  const h2B = document.createElement('h2');
  h2B.innerHTML = receta[6].tittle;
  h2B.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeB.appendChild(h2B);
  const h3b = document.createElement('h3');
  h3b.innerHTML = 'INGREDIENTS';
  h3b.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeB.appendChild(h3b);
  const superB = receta[6].ingredients;
  for (let e = 0; e < superB.length; e += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superB[e];
    containerRecipeB.appendChild(listItem);
  }
  const h3B = document.createElement('h3');
  h3B.innerHTML = 'PREPARATION';
  h3B.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeB.appendChild(h3B);
  const superPreparationB = receta[6].preparation;
  for (let j = 0; j < superPreparationB.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superPreparationB[j];
    containerRecipeB.appendChild(listItem);
  }
  const h3Y = document.createElement('h3');
  const superBasil = receta[0].final;
  h3Y.innerHTML = superBasil;
  h3Y.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeB.appendChild(h3Y);
  const imgB = document.createElement('img');
  const superimgB = receta[6].img;
  imgB.setAttribute('src', superimgB);
  imgB.setAttribute('class', 'img-recipes');
  containerRecipeB.appendChild(imgB);
  const btnB = document.createElement('button');
  btnB.setAttribute('class', 'btn-recipes');
  btnB.innerHTML = 'ADD YOUR RECIPE';
  containerRecipeB.appendChild(btnB);
  containerRecipe.appendChild(containerRecipeB);

  // RECIPE ROSEMARY
  const h2R = document.createElement('h2');
  h2R.innerHTML = receta[7].tittle;
  h2R.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeR.appendChild(h2R);
  const h3R = document.createElement('h3');
  h3R.innerHTML = 'INGREDIENTS';
  h3R.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeR.appendChild(h3R);
  const superR = receta[7].ingredients;
  for (let e = 0; e < superR.length; e += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superR[e];
    containerRecipeR.appendChild(listItem);
  }
  const h3n = document.createElement('h3');
  h3n.innerHTML = 'PREPARATION';
  h3n.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeR.appendChild(h3n);
  const superPreparationR = receta[7].preparation;
  for (let j = 0; j < superPreparationR.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superPreparationR[j];
    containerRecipeR.appendChild(listItem);
  }
  const h3P = document.createElement('h3');
  const superRosemary = receta[0].final;
  h3P.innerHTML = superRosemary;
  h3P.setAttribute('class', 'recipe-tittle-h2');
  containerRecipeR.appendChild(h3P);
  const imgR = document.createElement('img');
  const superimgR = receta[7].img;
  imgR.setAttribute('src', superimgR);
  imgR.setAttribute('class', 'img-recipes');
  containerRecipeR.appendChild(imgR);
  const btnR = document.createElement('button');
  btnR.setAttribute('class', 'btn-recipes');
  btnR.innerHTML = 'ADD YOUR RECIPE';
  containerRecipeR.appendChild(btnR);
  containerRecipe.appendChild(containerRecipeR);
}

fetch('../json/info-drinks.json')
  .then(data => data.json())
  .then(json => drinks(json));
