const deleteProduct = (id, setProducts) => {
    fetch(`http://localhost:3000/delete/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(prodRes => {
            fetch('http://localhost:3000/')
                .then(res => res.json())
                .then(prodRes => setProducts(prodRes))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
}

export default deleteProduct;