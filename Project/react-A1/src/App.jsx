import './App.css'
import { data } from '../../../public/fma-data'
import { Head } from './Head';
import { SectionOne } from './Section1';
import { SectionTwo } from './Section2';


function App() {
  return (
    <>
    <Head item ={data}/>
<div id='section-container' style ={{
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
}}>
<SectionOne item = {data}/>
<SectionTwo item = {data}/>
</div>
    </>
  )
}
export default App
