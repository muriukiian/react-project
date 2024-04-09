

function LoadButton(){

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    fetchProducts()
  },[])
  //limit 20
  return(<div className="container"></div>);
}

export default LoadButton