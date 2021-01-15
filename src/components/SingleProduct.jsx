import BeautyStars from "beauty-stars";

const singleProduct = ({ product }) => {
  return (
    <div className="m-2 p-2" style={{ backgroundColor: "white" }}>
      <img src={product.imageUrl} alt="img" className="w-100" />
      <p>{product.name}</p>
      <BeautyStars value={4} size={14} />
    </div>
  );
};

export default singleProduct;
