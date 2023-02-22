const fetchProduct = (setProducts) => {
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(prodRes => setProducts(prodRes))
    .catch(err => console.log(err))
}

export default fetchProduct;