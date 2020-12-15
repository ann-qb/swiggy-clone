export default function CartSummary(props) {
    const numberOfItems = props.items.filter(each => each.quantity > 0).length;
    const totalPrice = props.items.reduce((acc, each) => {
        if(each.quantity>0) acc+=each.price;
        return acc;
    }, 0);
    return(
        <>
        {numberOfItems>0?
        (<div>
            <div>
                <span>{numberOfItems}{numberOfItems > 1? " items": " item"} | Rs. {totalPrice}</span>
            </div>
            <div>
                <span>VIEW CART</span>
            </div>
        </div>): null}
        </>
    );
}