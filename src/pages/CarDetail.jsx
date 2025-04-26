import { useParams } from "react-router-dom";

const CarDetail = () => {
  const { id } = useParams(); // URL-dan id olamiz

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Car Detail Page</h1>
      <h2>Selected Car ID: {id}</h2>
      {/* Bu yerda id orqali ma'lumotlarni ko'rsatamiz */}
    </div>
  );
};

export default CarDetail;
