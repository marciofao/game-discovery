import { useState } from "react";

// { items:  [], heading : string  }
interface Props {
    items: string[];
    heading?: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    
    const [selectedItem, setSelectedItem] = useState(-1);

    const getMessage = () => {
        return items.length === 0 && <p>There are no items</p>;
    };

    return (
        <>
            <h1>{heading}</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        onClick={()=>{
                            setSelectedItem(index);
                            onSelectItem(item);
                        }}
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
