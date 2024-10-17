import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Order Confirmation Successful</h2>
      <button onClick={handleNavigate}>Go back</button>
    </div>
  );
};

export default OrderConfirmation;
