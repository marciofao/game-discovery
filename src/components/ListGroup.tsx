import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

function ListGroup() {
    let items = ["item1", "item2", "item3", "item4", "item5"];
    //items=[];

    let selcetedItem = -1;

    const getMessage = () => {
        return items.length === 0 && <p>There are no items</p>;
    };

    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        onClick={handleClick}
                        className={selcetedItem === index ? 'list-group-item active' : 'list-group-item'}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
