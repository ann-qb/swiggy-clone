import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login, logout } from "../../slices/login.slice";

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
  const { loggedIn } = useSelector((state) => state.loginSlice);
  const dispatch = useDispatch();
  const setLogin = () => {
    if (loggedIn) {
      dispatch(logout());
    } else {
      const userLogin = async () => {
        const response = await axios.post(
          "https://2f3a1faa-9ef5-488e-9b15-3c2d5c04172f.mock.pstmn.io/swiggy-clone/login"
        );
        if (response.data.message === "Success") {
          dispatch(login());
        } else {
          alert("Unable to login!");
        }
      };
      dispatch(userLogin);
    }
  };
  return (
    <>
      <Div>
        <H2> Swiggy Clone </H2>
        <Button onClick={setLogin}> {loggedIn ? "Logout" : "Login"} </Button>
      </Div>
    </>
  );
}
