import ListGroup from './components/ListGroup';

function App(){

    let items = ["item1", "item2", "item3", "item4", "item5"];

    return <div>
        <ListGroup items={items} heading='Cities'/>
    </div>
}

export default App;