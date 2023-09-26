import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
/* const Appleproducts = [
  {
    title: "iPhone Pro 15",
    price: "Rs. 1,35,000"
  },
  {
    title: "iPhone 15 Plus",
    price: "Rs. 90,000"
  },
  {
    title: "iPad Pro",
    price: "Rs. 110,000"
  },
  {
    title: "Apple Watch Ultra 2",
    price: "Rs. 90,000"
  },
  {
    title: "Macbook Pro 14 Inch",
    price: "Rs. 1,50,000"
  },
  {
    title: "AirPods Max",
    price: "Rs. 55,000"
  }
];
*/
let products = [];

function Products() {
  // Used for maintaning state and re-rendering
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("RENDER");
  // useEffect is a hook which has a callBack on dependencyArray
  // For empty Array it will be called for every re-render
  // If I pass a state variable in dependenvyArray 
  // it gets called on state change
  useEffect(() => {
    // sample API call to fetch products
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (respJson) {
        console.log(respJson);
        console.log("FETCH");
        setProducts(respJson);
        setLoading(false);
      })
      .catch(function (err) {
        setError(err);
      });
  }, []);

  console.log("CONTINUE");

  if (error) {
    return <div> Hey, Its embarrasing you got this {error} </div>;
  }

  // Add animation for loading
  else if (isLoading) {
    return (
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          alt="loading"
        />
      </div>
    );
  } 
  
  else {
    return (
      <div>
        <h3>List of products</h3>
        <ProductCard
          title={"Test Product Title"}
          price={"Test Product Price"}
        />
        {products.map(function (item) {
          return (
            <ProductCard
              title={item.title}
              price={item.price}
              key={item.title}
            />
          );
        })}
      </div>
    );
  }
}

export default Products;
