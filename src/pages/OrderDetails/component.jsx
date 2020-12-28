import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageNotFound from "../../components/PageNotFound";
import { removeOrder } from "../../slices/orderlist.slice";

const Div = styled.div`
  border: 1px solid #cdc8c8;
  box-shadow: 10px 10px 20px 5px #f4f4f4;
  border-radius: 5px;
  margin: 4% 2%;
  padding: 15px;
  @media all and (min-width: 440px) {
    padding: 20px;
  }
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  border-radius: 4px;
  & > * {
    margin: 2%;
  }
`;

const ItemListDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  margin: 10px 0;
  & > * {
    margin: 2px;
    border-radius: 5px;
  }
  & > h4 {
    padding: 6px 10px;
    background-color: #83698f;
    color: #ffffff;
  }
  & > p {
    padding: 6px 10px;
    background-color: #f7c8ab;
  }
`;

const Span = styled.span`
  text-align: left;
  margin: 10px 0;
  padding: 0 6px;

  & > * {
    margin: 0;
    display: inline-block;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  const order = props.location.state ? props.location.state.order : false;
  // const order = props.location.state.order || false;
  const { loggedIn } = useSelector((state) => state.loginSlice);
  const dispatch = useDispatch();
  const cancelOrder = () => {
    dispatch(removeOrder({ id: order.orderId }));
  };
  return order ? (
    loggedIn ? (
      <Div>
        {order.orderStatus === "Success" ? (
          <h2>Your order has been delivered successfully!</h2>
        ) : (
          <>
            <h2>Your order has been placed successfully!</h2>
            <h3>Sit back and relax!</h3>
            <p>Your order will be delivered soon.</p>
          </>
        )}
        <ItemListDiv>
          <h4>Items</h4>
          {order.orderDetails.map((item) => (
            <p key={item.id}>
              {item.quantity} x {item.name}
            </p>
          ))}
        </ItemListDiv>
        <Span>
          <h4>Total Amount:</h4>{" "}
          <p>
            Rs.{" "}
            {order.orderDetails.reduce(
              (acc, item) => (acc += item.price * item.quantity),
              0
            )}
          </p>
        </Span>
        {/* Is this ok to put another component inside link? */}
        <ButtonContainer>
          <Link to="/productlist">
            <Button>Back</Button>
          </Link>
          <Link to="/productlist">
            <Button onClick={cancelOrder}>
              {order.orderStatus === "Success" ? "Ok" : "Cancel Order"}
            </Button>
          </Link>
        </ButtonContainer>
      </Div>
    ) : null
  ) : (
    <PageNotFound />
  );
}
