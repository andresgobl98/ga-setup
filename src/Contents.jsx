import React from 'react'
import { useFeature } from '@growthbook/growthbook-react'

const Contents = () => {
    const container_type = useFeature('text-container').on

    return (
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
    )
}

export default Contents