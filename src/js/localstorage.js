let data = [];
const form = document.querySelector('#form');
const div = document.getElementById('new-recipe');
function createItem(name, ingredients, preparation) {
  const item = {
    name,
    ingredients,
    preparation,
  };
  data.push(item);
  return item;
}
function printDOM() {
  div.innerHTML = '';
  data = JSON.parse(localStorage.getItem('Data-Recipe'));
  if (data === null) {
    data = [];
  } else {
    data.forEach((element) => {
      div.innerHTML += `<h2 class="recipe-tittle-h2">${element.name}</h2>`;
      div.innerHTML += `<p>${element.ingredients}</p>`;
      div.innerHTML += `<p>${element.preparation}</p>`;
    });
  }
}
function localSave() {
  localStorage.setItem('Data-Recipe', JSON.stringify(data));
  printDOM();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name1 = document.getElementById('name').value;
  const ingredients1 = document.getElementById('ingredients').value;
  const preparation2 = document.getElementById('preparation').value;
  createItem(name1, ingredients1, preparation2);
  localSave();
  form.reset();
});
console.log(data);
document.addEventListener('DOMContentLoaded', printDOM);
