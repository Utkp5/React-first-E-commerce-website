import React,{useState} from "react";
import "./Products.css";
import Navbar from "../../components/navbar/navbar";

function Products() {
  const [products,setProducts] = useState([
    {
      id : 0,
      shoeImage : "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      productDetail : "Hartbeespoort",
      productTitle : "Hartbee",
      productTitle_b : "spoort",
      badge : "New",
      productCaption : "Basket Ball Collection",
      productSize : "Size",
      productColor : "Color",
      productPrice_b : "23,453",
      value : 0,
    },
    {
      id : 1,
      shoeImage : "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      productDetail : "Hartbeespoort",
      productTitle : "Hartbee",
      productTitle_b : "spoort",
      badge : "New",
      productCaption : "Basket Ball Collection",
      productSize : "Size",
      productColor : "Color",
      productPrice_b : "23,453",
      value : 0,
    },
    {
      id : 2,
      shoeImage : "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      productDetail : "Hartbeespoort",
      productTitle : "Hartbee",
      productTitle_b : "spoort",
      badge : "New",
      productCaption : "Basket Ball Collection",
      productSize : "Size",
      productColor : "Color",
      productPrice_b : "23,453",
      value : 0,
    },
    {
      id : 3,
      shoeImage : "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      productDetail : "Hartbeespoort",
      productTitle : "Hartbee",
      productTitle_b : "spoort",
      badge : "New",
      productCaption : "Basket Ball Collection",
      productSize : "Size",
      productColor : "Color",
      productPrice_b : "23,453",
      value : 0,
    },
    {
      id : 4,
      shoeImage : "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      productDetail : "Hartbeespoort",
      productTitle : "Hartbee",
      productTitle_b : "spoort",
      badge : "New",
      productCaption : "Basket Ball Collection",
      productSize : "Size",
      productColor : "Color",
      productPrice_b : "23,453",
      value : 0,
    },
    {
      id : 5,
      shoeImage : "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      productDetail : "Hartbeespoort",
      productTitle : "Hartbee",
      productTitle_b : "spoort",
      badge : "New",
      productCaption : "Basket Ball Collection",
      productSize : "Size",
      productColor : "Color",
      productPrice_b : "23,453",
      value : 0,
    },
  ]);

  const increment = (id) => {
    const newProducts = [...products];
    newProducts[id].value = newProducts[id].value + 1;
    setProducts(newProducts);
  };
 
  const decrement = (id) => {
    const newProducts = [...products];
    newProducts[id].value = newProducts[id].value - 1;
    setProducts(newProducts);
  };

  return (
    <div>
    <Navbar />
    <div className="banner">
    <img className="banner_img" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/2bbcfa99737217.5ef9be3dbb9a9.jpg" alt="" />
    <img className="banner_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZGQA_-P3K4LEPYSGqqJlc2MXXYOBGPW6IA&usqp=CAU" alt="" />
    </div>
    
    {
      products.map((product) => {
        return (
          <div class="container">
          <div class="card">
          <div class="card-head">
          <img src={product.shoeImage} alt="Shoe" class="product-img"/>
          <div class="product-detail">
          <h2>{product.productDetail}</h2>
        </div>
      </div>
      <div class="card-body">
        <div class="product-desc">
          <span class="product-title">{product.productTitle}<b>{product.productTitle_b}</b>
                  <span class="badge">{product.badge}</span>
          </span>
          <span class="product-caption">{product.productCaption}</span>
        </div>
        <div class="product-properties">
          <span class="product-size">
                  <h4>{product.productSize}</h4>
                  <ul class="ul-size">
                    <li><a href="">7</a></li>
                    <li><a href="">8</a></li>
                    <li><a href="">9</a></li>
                    <li><a href="" class="active">10</a></li>
                    <li><a href="">11</a></li>
                  </ul>
                </span>
          <span class="product-color">
                  <h4>{product.productColor}</h4>
                  <ul class="ul-color">
                    <li><a href="#" class="orange active"></a></li>
                    <li><a href="#" class="green"></a></li>
                    <li><a href="#" class="yellow"></a></li>
                  </ul>
                </span>
          <span class="product-price">USD<b>{product.productPrice_b}</b></span>
        </div>
        <div className="button_inc_dec">
        <button className="button_inc" onClick={() =>{
            increment(product.id);
        }}>+</button>

        <p className="result">{product.value}</p>

        <button className="button_dec" onClick={() =>{
          decrement(product.id)
        }}>-</button>
        <button className="Addtocart">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
        )
      })
    }
    
</div>
  );
}

export default Products;
