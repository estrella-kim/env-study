export function fetchListAPI() {
  return fetch('http://wow9144.github.io/productList.json')
    .then((response) => response.json())
    .then((json) => json.data);
}

