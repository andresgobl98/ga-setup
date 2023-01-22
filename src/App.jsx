import './App.scss';
import { useEffect, useState } from 'react';
import { nanoid } from "nanoid";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import Contents from './Contents';

const FEATURES_ENDPOINT = "https://cdn.growthbook.io/api/features/prod_2oJkcRE2G1vC1e8D0jXo9akFWxFO36NZm2i3i0qTZ90";

function App() {
  const [visitorId, setVisitorId] = useState(localStorage.getItem('visitor_id'))

  useEffect(() => {
    if (!visitorId) {
      const new_visitor_id = nanoid()
      localStorage.setItem('visitor_id', new_visitor_id)
      setVisitorId(new_visitor_id)
    }
  }, [visitorId])

  // Create a GrowthBook instance
  const gb = new GrowthBook({
    attributes: {
      id: visitorId,
    },
    enableDevMode: true,
    trackingCallback: (experiment, result) => {
      console.log({
        experimentId: experiment.key,
        variantId: result.variationId,
      })
    },
  })

  fetch(FEATURES_ENDPOINT)
    .then((res) => res.json())
    .then((json) => {
      gb.setFeatures(json.features)
    })

  return (
    <GrowthBookProvider growthbook={gb}>
      <div className="App">
        <Contents />
      </div>
    </GrowthBookProvider>
  );
}

export default App;
