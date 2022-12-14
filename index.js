// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyRemoveFirstCat() {
  return cats.shift();
}

function appendCat(name) {
  let copyOfCats = cats.slice();
  copyOfCats.push(name);
  return copyOfCats;
}

function prependCat(name) {
  let copyOfCats = cats.slice();
  copyOfCats.unshift(name);
  return copyOfCats;
}

function removeFirstCat() {
  let newCats = cats.slice(1);
  return newCats;
}

function removeLastCat() {
  let newCats = cats.slice(0, cats.length - 1);
  return newCats;
}
