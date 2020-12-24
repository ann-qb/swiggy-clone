import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";

const Div = styled.div`
  background-color: #f7c8ab;
  margin: 4% 2%;
  padding: 15px;
  @media all and (min-width: 440px) {
    padding: 20px;
  }
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #9947bc;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: #8025a7;
  }
`;

export default function OrderDetails(props) {
  return (
      <Div>
        <h2>Your order has been placed successfully!</h2>
        <h3>Sit back and relax!</h3>
        <h4>Your order will be delivered in 30 seconds.</h4>
        {/* Is this ok to put another component inside link? */}
        <Link to="/productlist">
          <Button>Back</Button>
        </Link>
      </Div>
  );
}
