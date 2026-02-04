import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

function ListGroup() {
    let items = ["item1", "item2", "item3", "item4", "item5"];

    const [selectedItem, setSelectedItem] = useState(-1);
    

    const getMessage = () => {
        return items.length === 0 && <p>There are no items</p>;
    };

    return (
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        onClick={()=>setSelectedItem(index)}
                        className={selectedItem === index ? 'list-group-item active' : 'list-group-item'}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
