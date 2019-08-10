const data = [];
const form = document.querySelector('#form');
// const div = document.getElementById('new-recipe');
function createItem(name, ingredients, preparation) {
  const item = {
    name,
    ingredients,
    preparation,
  };
  data.push(item);
  return item;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name1 = document.getElementById('name').value;
  const ingredients1 = document.getElementById('ingredients').value;
  const preparation2 = document.getElementById('preparation').value;
  createItem(name1, ingredients1, preparation2);
  form.reset();
});
