import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  const [ variantShown, setVariantShown ] = useState(1)
  const [ goVar, setGoVar ] = useState(null)

  useEffect(() => {
    const variant = window.google_optimize.get('KGpFV4A0TFaVmdZLKAUzSA')

    setGoVar(variant)
  }, [])

  console.log(goVar)
  return (
    <div className="App">
      <div className='content'>
        <h1>Google Analytics playground</h1>
        <button className='button' onClick={() => {
          if (variantShown === 1) {
            setVariantShown(2)
            return
          }
          setVariantShown(1)
          }}>
          Change Variant
        </button>
        {variantShown === 1 ?
          <div className={'experiment experiment-1'}>
            <span>This is variant 1</span>
          </div>
          :
          <div className={'experiment experiment-2'}>
            <span>This is variant 2</span>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
