import { useState, useEffect } from "react";
import './styles.css'


function LoadMore(){

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts(){
    try{
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20
        }`
      );

      const data = await response.json();
      
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }

      console.log(data);
    } catch(e){
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  },[count]);  

  useEffect(() => {
    if(products && products.length === 100) setDisableButton(true)
  },[products]);

  if(loading){
    return <div>Loading data...Please wait</div>
  }



  return(
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length 
        ? products.map((item, id) => (
            <div className="product" key={id}>
                <img src={item.thumbnail}/>
                <p>{item.title}</p>
                <p>{'$' + item.price}</p>
            </div>          
              ))
              :null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
        {
          disableButton ? <p>You have reached to 100 products</p>: null
        }
      </div>
    </div>

  );
}

export default LoadMore