import './App.scss';
import { useEffect, useState } from 'react';
import useExperiment from './utils/experiments';

function App() {
  const [ variantShown, setVariantShown ] = useState(1)
  const expResult = useExperiment('KGpFV4A0TFaVmdZLKAUzSA');

  useEffect(() => {
    setVariantShown(expResult)
  }, [expResult])

  console.log(variantShown)
  
  return (
    <div className="App">
      <div className='content'>
        <h1>Google Analytics playground</h1>
        {/* <button className='button' onClick={() => {
          if (variantShown === 1) {
            setVariantShown(2)
            return
          }
          setVariantShown(1)
          }}>
          Change Variant
        </button> */}
        {variantShown === 1 ?
          <div className={'experiment experiment-2'}>
            <span>This is the VARIANT</span>
          </div>
          :
          <div className={'experiment experiment-1'}>
            <span>This is the ORIGINAL</span>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
