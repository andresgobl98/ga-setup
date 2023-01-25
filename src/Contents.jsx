import React from 'react'
import { useFeature } from '@growthbook/growthbook-react'

const Contents = () => {
    const container_type = useFeature('text-container').on

    return (
        <div className='content'>
            <h1>Google Analytics playground</h1>
            <div data-experiment-id='text-container' data-experiment-result={container_type} className={`experiment version version-${container_type ? '2' : '1'}`}>
                {container_type ?
                    <span>This is the VARIANT</span>
                    :
                    <span>This is the ORIGINAL</span>
                }
            </div>
            {/* {container_type ?
                <div id='text-container' className={'experiment version version-2'}>
                    <span>This is the VARIANT</span>
                </div>
                :
                <div data-experiment-id='text-container' className={'experiment version version-1'}>
                    <span>This is the ORIGINAL</span>
                </div>
            } */}
        </div>
    )
}

export default Contents