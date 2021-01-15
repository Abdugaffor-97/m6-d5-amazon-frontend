import BeautyStars from "beauty-stars";
import { withRouter } from "react-router-dom";

const singleProduct = ({ product, history }) => {
  return (
    <div
      className="m-2 p-2"
      style={{ backgroundColor: "white" }}
      onClick={() => history.push("/details/" + product._id)}
    >
      <img src={product.imageUrl} alt="img" className="w-100" />
      <p>{product.name}</p>
      <BeautyStars value={4} size={14} />
    </div>
  );
};

export default withRouter(singleProduct);
