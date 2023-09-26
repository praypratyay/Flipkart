import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart";

function ProductCard(props) {
  return (
    <div className="card">
      <div>{props.title}</div>
      <div>
        Price: {props.price.currency} {props.price.value}
      </div>
      <AddToCart />
    </div>
  );
}

// named export
// export var a = 10;

// default export ProductCard function
export default ProductCard;
