import styled from "styled-components";

const Div = styled.div`
  background-color: #f7c8ab;
  margin: 4% 2%;
  padding: 15px;
  @media all and (min-width: 440px) {
    padding: 20px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1 1;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px;
  margin: 4px 2px;
  background-color: #9947bc;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: #8025a7;
  }
`;

export default function CartSummary(props) {
  const { numberOfItems, totalPrice, onReset, onCheckOut } = props;
  return (
    <>
      {numberOfItems > 0 ? (
        <Div>
          <div>
            <span>
              {numberOfItems}
              {numberOfItems > 1 ? " items" : " item"} | Rs. {totalPrice}
            </span>
          </div>
          <ButtonContainer>
            <Button onClick={onReset}>RESET</Button>{" "}
            <Button onClick={onCheckOut}>CHECK OUT</Button>
          </ButtonContainer>
        </Div>
      ) : null}
    </>
  );
}
