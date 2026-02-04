import ListGroup from './components/ListGroup';

function App(){

    let items = ["item1", "item2", "item3", "item4", "item5"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return <div>
        <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
    </div>
}

export default App;