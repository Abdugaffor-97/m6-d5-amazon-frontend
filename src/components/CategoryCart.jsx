import { Link } from "react-router-dom";

const categoryCart = ({ category }) => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        height: "400px",
        width: "500px",
        backgroundColor: "white",
        margin: "4px 5px",
        padding: "10px",
      }}
    >
      <b>{category.name}</b>
      <img
        className='className="d-block w-100"'
        src={process.env.PUBLIC_URL + "/assets/categories" + category.img}
        alt={category.name}
        // style={{ maxWidth: "330px", height: "300px" }}
      />
      <Link to="/cat">See more</Link>
    </div>
  );
};

export default categoryCart;
