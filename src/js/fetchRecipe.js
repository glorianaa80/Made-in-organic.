function recipe(data) {
  // RECIPE KALE
  const receta = data.Recetas;
  const containerRecipe = document.getElementById('container-recipe');

  const t = document.createElement('h2');
  t.innerHTML = 'INGREDIENTS';
  t.setAttribute('class', 'recipe-tittleo');
  containerRecipe.appendChild(t);

  const H3Kale = document.createElement('h3');
  H3Kale.innerHTML = 'INGREDIENTS';
  H3Kale.setAttribute('class', 'recipe-tittle');
  containerRecipe.appendChild(H3Kale);
  const superKale = receta[0].ingredients;
  for (let j = 0; j < superKale.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superKale[j];
    containerRecipe.appendChild(listItem);
  }
  const H3k = document.createElement('h3');
  H3k.innerHTML = 'PREPARATION';
  H3k.setAttribute('class', 'recipe-tittle');
  containerRecipe.appendChild(H3k);
  const superPreparation = receta[0].preparation;
  for (let j = 0; j < superPreparation.length; j += 1) {
    const listItem = document.createElement('p');
    listItem.setAttribute('class', 'info-recipe');
    listItem.innerHTML = superPreparation[j];
    containerRecipe.appendChild(listItem);
  }
  const H3a = document.createElement('h3');
  const superKalee = receta[0].final;
  H3a.innerHTML = superKalee;
  H3a.setAttribute('class', 'recipe-tittle');
  containerRecipe.appendChild(H3a);

  const img = document.createElement('img');
  const superimg = receta[0].img;
  img.setAttribute('src', superimg);
  img.setAttribute('class', 'img-recipes');
  containerRecipe.appendChild(img);

  const btn = document.createElement('button');
  btn.setAttribute('class', 'btn-recipes');
  btn.innerHTML = 'ADD YOUR RECIPE';
  containerRecipe.appendChild(btn);

  // RECIPE CORIANDER
  const H3Coriander = document.createElement('h3');
  H3Coriander.innerHTML = 'INGREDIENTS';
  H3Coriander.setAttribute('class', 'recipe-tittle');
  containerRecipe.appendChild(H3Coriander);
}

fetch('../json/info-recipe.json')
  .then(data => data.json())
  .then(json => recipe(json));
