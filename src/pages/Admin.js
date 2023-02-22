import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import ProductsContext from '../contexts/ProductsContext';

const Admin = () => {

  const {products, setProducts} = useContext(ProductsContext);

  const [editMode, setEditMode] = useState({mode: false, id: null});

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [qty, setQty] = useState('');
  const [img, setImg] = useState('');

  const navigate = useNavigate();

  // Preview product for editing
  const setEditProduct = (id) => {
    setEditMode({mode: true, id: id});

    let product = products.filter(prod => {
      if(prod.id == id) return prod;
    })[0];

    setName(product.name);
    setPrice(product.price);
    setDesc(product.desc);
    setCategory(product.category);
    setQty(product.qty);


  }

  // Cancel window for ediing product

  const cancelEditing = () => {
    setEditMode({mode: false, id: null});

    setName('');
    setPrice('');
    setDesc('');
    setCategory('');
    setQty('');

  }

  // Edit product in Edit form

  const editProduct = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      price: price,
      desc: desc,
      category: category,
      qty: qty
    };

    fetch(`http://localhost:3000/edit/${editMode.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(productRaw => productRaw.json())
      .then(productJson => {
        cancelEditing();

        fetch('http://localhost:3000/')
          .then(res => res.json())
          .then(prodRes => setProducts(prodRes))
          .catch(err => console.log(err))

      })
      .catch(err => console.log(err))

  };

    // Delete product from admin page

    const removeProduct = (id, setProducts) => {
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
        .catch(err => console.error(err))
    }

  return (
    <div className='container'>
    {editMode.mode
      ?
      <>
        <h3>Edit Product</h3>
        <form onSubmit={editProduct}>
          <div className="mb-3">
            <input type="text" name='name' className='form-control' value={name} onChange={(event) => setName(event.target.value)} placeholder='Name' />
          </div>
          <div className="mb-3">
            <input type="number" name='price' className='form-control' value={price} onChange={(event) => setPrice(event.target.value)} placeholder='Price' />
          </div>
          <div className="mb-3">
            <input type="text" name='desc' className='form-control' value={desc} onChange={(event) => setDesc(event.target.value)} placeholder='Description' />
          </div>
          <div className="mb-3">
            <input type="text" name='category' className='form-control' value={category} onChange={(event) => setCategory(event.target.value)} placeholder='Category' />
          </div>
          <div className="mb-3">
            <input type="text" name='qty' className='form-control' value={qty} onChange={(event) => setQty(event.target.value)} placeholder='Qty' />
          </div>
          <input type="submit" value='Edit' className='btn btn-warning' />
        </form>
        <button className='btn btn-danger' onClick={() => cancelEditing()}>Cancel</button>
      </>
      :
      <>
        <h3>Add Product</h3>
        <form action='http://localhost:3000/add' encType='multipart/form-data' method='post'>
          <div className="mb-3">
            <input type="text" name='name' className='form-control' value={name} onChange={(event) => setName(event.target.value)} placeholder='Name' />
          </div>
          <div className="mb-3">
            <input type="number" name='price' className='form-control' value={price} onChange={(event) => setPrice(event.target.value)} placeholder='Price' />
          </div>
          <div className="mb-3">
            <input type="text" name='desc' className='form-control' value={desc} onChange={(event) => setDesc(event.target.value)} placeholder='Description' />
          </div>
          <div className="mb-3">
            <input type="text" name='category' className='form-control' value={category} onChange={(event) => setCategory(event.target.value)} placeholder='Category' />
          </div>
          <div className="mb-3">
            <input type="text" name='qty' className='form-control' value={qty} onChange={(event) => setQty(event.target.value)} placeholder='Qty' />
          </div>
          <div className="mb-3">
            <input type="file" name='img' className='form-control' value={img} onChange={(event) => setImg(event.target.value)} placeholder='Image' />
          </div>
          <input type="submit" value='Add' className='btn btn-primary' />
        </form>
      </>
    }


    <hr />

    <table className='table table-striped'>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Qty.</th>
          <th scope="col">Unit Price</th>
          <th scope="col">View</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item, idx) => {
          return (
            <tr>
              <th scope="row">{item.id}</th>
              <td className='py-3'><img src={`http://localhost:3000/${item.img}`} alt="Photo" height="50px" /></td>
              <td className='py-3'>{item.name}</td>
              <td className='py-3'>{item.qty}</td>
              <td className='py-3'>${item.price}</td>
              <td className='py-3'><button class="btn btn-info my-auto" onClick={() => navigate(`/single/${item.id}`)}>View</button></td>
              <td className='py-3'><button class="btn btn-warning my-auto" onClick={() => setEditProduct(item.id)}>Edit</button></td>
              <td className='py-3'><button class="btn btn-danger my-auto" onClick={() => removeProduct(item.id)}>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default Admin