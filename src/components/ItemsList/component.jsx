import ItemCard from "./../ItemCard";
import { useSelector, useDispatch } from "react-redux";

export default function ItemsList(props) {
  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();
  return data.map((item) => (
    <ItemCard key={item.id} item={item} setItem={dispatch} />
  ));
}