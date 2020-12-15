import styled from "styled-components";
import burgerImage from "./../../assets/burger.jpg";

const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 10px;
  ${"" /* margin: 20px 10px; */}
  border: 1px solid #f4f4f4;
  border-radius: 5px;
`;

const ImgDiv = styled.div`
  ${"" /* flex: 1 25%; */}
`;
const H3 = styled.h3`
  margin: 0;
`;
const Img = styled.img`
  height: 100px;
  ${"" /* padding: 10px; */}
`;
const DetailsDiv = styled.div``;

const ActionDiv = styled.div``;
const Action = styled.div`
  align-self: center;
`;
// const Image = styled.img`
// width: 50px;
// height: 50px;
// margin: 50px;
// `;

// const Title = styled.h3`

// `;

// const Price = styled.p`

// `;

// const Description = styled.p`

// `;

export default function ItemCard(props) {
  const onPlus = (e) => {
    console.log(e.target.id);
    const id = e.target.id;
    // props.setItem({ type: "INCREMENT", id });
  };
  return (
    <Card>
      <ImgDiv>
        <Img src={burgerImage} alt="Menu Item" />
      </ImgDiv>
      <DetailsDiv>
        <H3>{props.item.name}</H3>
        <p>Rs. {props.item.price}</p>
        <p>{props.item.description}</p>
      </DetailsDiv>
      <ActionDiv>
        {props.item.quantity > 0 ? (
          <Action>
            <button id={props.item.id}>-</button>
            <span>{props.item.quantity}</span>
            <button id={props.item.id} onClick={onPlus}>+</button>
          </Action>
        ) : (
          <Action>
            <span>Add</span>
            <button id={props.item.id} onClick={onPlus}>+</button>
          </Action>
        )}
        {console.log(props.item)}
      </ActionDiv>
    </Card>
  );
}
