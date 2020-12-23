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

const H2 = styled.h2`
margin: 0;
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

export default function Header() {
  return (
    <>
      <Div>
        <H2>Swiggy Clone</H2>
        <Button>Login</Button>
      </Div>
    </>
  );
}
