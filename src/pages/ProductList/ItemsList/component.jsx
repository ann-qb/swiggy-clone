import ItemCard from "./ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function ItemsList(props) {
  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts);
  // }, []);
  return data.map((item) => (
    <ItemCard key={item.id} item={item} setItem={dispatch} />
  ));
}
