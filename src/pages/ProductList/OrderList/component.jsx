import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  background-color: #d291bc;
  margin: 4% 2%;
  padding: 8px;
  @media all and (min-width: 440px) {
    padding: 15px;
  }
  display: flex;
  flex-flow: column nowrap;
  border-radius: 4px;
`;

const OrderDiv = styled.div`
  background-color: #fec8d8;
  padding: 10px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export default function OrderList(props) {
  const orderList = [
    { orderId: 1, orderStatus: "Processing" },
    { orderId: 2, orderStatus: "Processing" },
  ];
  return (
    <>
      {orderList.length > 0 ? (
        <Div>
          {orderList.map((each) => (
            <OrderDiv key={each.orderId}>
              <div>
                <span>
                  Order {each.orderId} | {each.orderStatus === 'Success' ? 'Your order has been delivered successfully!': 'Your order is being processed.'}
                </span>
              </div>
              <div>
                <Link to='/order/:id'><Button>VIEW ORDER</Button></Link>
              </div>
            </OrderDiv>
          ))}
        </Div>
      ) : null}
    </>
  );
}
