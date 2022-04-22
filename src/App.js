import './App.css';
import Listing from "./listing/listing";
import {dataString} from "./data/etsy";

const data = JSON.parse(dataString
    .replaceAll('\n','\\n')
    .replaceAll('\r','\\r')
    .replaceAll('\t','\\t')
);

function App() {
  return (
    <Listing items={data}/>
  );
}

export default App;
