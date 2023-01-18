export const favListItems = [];

const keys = Object.keys(localStorage).sort();

for (let i = 0; i < localStorage.length; i++) {
  favListItems.push(JSON.parse(localStorage.getItem(keys[i])));
}


