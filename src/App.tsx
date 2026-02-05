import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App(){

    const [alertVisible, setAlertVisibility] = useState(false);

    let items = ["item1", "item2", "item3", "item4", "item5"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return <div>
        {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}> Hello <span>World</span></Alert>}
        <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
        <Button color='dark' onClick={()=>setAlertVisibility(true)}>My button</Button>
    </div>
} 

export default App;