
import Newsupdates from './Component/Newsupdates'
import Matrix from './Component/Matrix';
import Accordion from './Component/Accordation';
import Gamelisting from './Component/Gamelisting';
import NFTS from './Component/NFTS';
import Transparentnavbar from './Component/Transparentnavbar';
import OtherSactions from './Component/OtherComponents';

import './App.scss';
import Footer from './Component/Footer';


function App() {
  return (
    <>

<Transparentnavbar/>
 <Matrix/>
 <OtherSactions/>
{/*<Newsupdates/>
<Gamelisting/>    
<NFTS/>  */}
<Footer/> 
{/* <Accordion/> */}
{/* <Dropdown/> */}
    </>
  );
}

export default App;
