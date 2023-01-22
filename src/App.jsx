import './App.scss';
import { useEffect, useState } from 'react';
import { nanoid } from "nanoid";
import { GrowthBook, GrowthBookProvider, useFeature } from "@growthbook/growthbook-react";

const FEATURES_ENDPOINT = "https://cdn.growthbook.io/api/features/prod_2oJkcRE2G1vC1e8D0jXo9akFWxFO36NZm2i3i0qTZ90";

function App() {
  const [visitorId, setVisitorId] = useState(localStorage.getItem('visitor_id'))
  const container_type = useFeature('text-container').on

  useEffect(() => {
    if (!visitorId) {
      const new_visitor_id = nanoid()
      localStorage.setItem('visitor_id', new_visitor_id)
      setVisitorId(new_visitor_id)
    }
  }, [visitorId])

  // Create a GrowthBook instance
  const growthbook = new GrowthBook({
    attributes: {
      id: visitorId,
    },
    trackingCallback: (experiment, result) => {
      console.log({
        experiment: experiment,
        result: result,
      })
    },
  })

  fetch(FEATURES_ENDPOINT)
    .then((res) => res.json())
    .then((json) => {
      growthbook.setFeatures(json.features)
    })

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <div className="App">
        <div className='content'>
          <h1>Google Analytics playground</h1>
          {container_type ?
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
    </GrowthBookProvider>
  );
}

export default App;
