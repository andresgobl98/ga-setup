import './App.scss';
import { useEffect, useState } from 'react';
import useExperiment from './utils/experiments';

function App() {
  const [ variantShown, setVariantShown ] = useState(null)
  const expResult = useExperiment('KGpFV4A0TFaVmdZLKAUzSA');

  useEffect(() => {
    setVariantShown(expResult)
  }, [expResult])

  const showExperiment = () => {
    switch (variantShown) {
      case 0: 
        return (
          <div className={'experiment experiment-1'}>
            <span>This is the ORIGINAL</span>
          </div>
        )
      case 1:
        return (
          <div className={'experiment experiment-2'}>
            <span>This is the VARIANT</span>
          </div>
        )
      default:
        return (
          <div className={'experiment experiment-1'}>
            <span>This is the ORIGINAL</span>
          </div>
        )
    }
  }

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
        {showExperiment()}
      </div>
    </div>
  );
}

export default App;
