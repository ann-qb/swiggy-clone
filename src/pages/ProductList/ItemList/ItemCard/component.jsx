import { useSelector } from "react-redux";
import styled from "styled-components";
import burgerImage from "../../../../assets/burger.jpg";
import { increment, decrement } from "../../../../slices/cart.slice";

const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 4% 2%;
  padding: 10px;
  border: 1px solid #cdc8c8;
  box-shadow: 10px 10px 20px 5px #f4f4f4;
  border-radius: 5px;
  & > div {
    padding: 5px;
  }
`;

const Img = styled.img`
  width: 100%;
  display: none;
  @media all and (min-width: 400px) {
    display: block;
  }
`;

const DetailsDiv = styled.div`
  & > h3,
  p {
    margin-top: 0;
    margin-bottom: 3px;
  }
  & > p:last-child {
    font-size: 85%;
  }
`;

const Action = styled.div`
  background-color: #d4f2c4;
  border: none;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  width: min(55px);
  justify-content: space-around;
  &:hover {
    background-color: #a4db87;
  }
`;

const Button = styled.button`
  background-color: transparent;
  padding: 5px;
  border: none;
  outline: none;
`;

export default function ItemCard(props) {
  const { loggedIn } = useSelector((state) => state.loginSlice);
  const onPlus = (e) => {
    if (loggedIn) {
      const id = e.currentTarget.id;
      props.setItem(increment(id));
    } else {
      alert("You need to be logged in to add items to cart!");
    }
  };
  const onMinus = (e) => {
    const id = e.currentTarget.id;
    props.setItem(decrement(id));
  };
  return (
    <Card>
      <div>
        <Img src={burgerImage} alt="Menu Item" />
      </div>
      <DetailsDiv>
        <h3>{props.item.name}</h3>
        <p>Rs. {props.item.price}</p>
        <p>{props.item.description}</p>
      </DetailsDiv>
      <div>
        {props.item.quantity > 0 && loggedIn? (
          <Action>
            <Button id={props.item.id} onClick={onMinus}>
              -
            </Button>
            <span>{props.item.quantity}</span>
            <Button id={props.item.id} onClick={onPlus}>
              +
            </Button>
          </Action>
        ) : (
          <Action id={props.item.id} onClick={onPlus}>
            <Button>Add</Button>
          </Action>
        )}
      </div>
    </Card>
  );
}
