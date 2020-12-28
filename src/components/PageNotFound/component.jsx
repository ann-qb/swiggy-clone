import styled from "styled-components";

const H2 = styled.h2`
  margin: 4% 2%;
  padding: 15px;
  @media all and (min-width: 440px) {
    padding: 20px;
  }
  text-align: center;
`;

export default function PageNotFound() {
  return <H2>404: Page Not Found</H2>;
}
