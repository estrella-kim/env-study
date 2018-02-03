export function fetchProductListAPI() {
  return fetch('http://wow9144.github.io/productList.json')
    .then(res => res.json())
    .then(json => {
      if(json.success) {
        return json.data;
      }
    });
}