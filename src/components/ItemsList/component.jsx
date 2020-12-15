import ItemCard from "./../ItemCard";

export default function ItemsList(props) {
  return props.items.map((item) => <ItemCard key={item.id} item={item}/>);
}
