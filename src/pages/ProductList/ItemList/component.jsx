import ItemCard from "./ItemCard";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import axios from "axios";
// import { fetchData } from "../../../slices/cart.slice";

export default function ItemList(props) {
  const { data } = useSelector((state) => (state.cartSlice));
  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function fetchProductList(dispatch) {
  //     const url =
  //       "https://2f3a1faa-9ef5-488e-9b15-3c2d5c04172f.mock.pstmn.io/swiggy-clone/getitemlist";
  //     const response = await axios.get(url);
  //     dispatch(fetchData(response.data));
  //   }
  //   dispatch(fetchProductList);
  // }, []);

  return data.map((item) => (
    <ItemCard key={item.id} item={item} setItem={dispatch} />
  ));
}
