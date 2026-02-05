import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';

function App(){

    let items = ["item1", "item2", "item3", "item4", "item5"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return <div>
        <Alert>
            Hello <span>World</span>
        </Alert>
        <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
        <Button color='secondary' onClick={()=>console.log('clicked')}>My button</Button>
    </div>
} 

export default App;