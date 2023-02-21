import React from 'react'
import { useFeature } from '@growthbook/growthbook-react'

const Contents = () => {
    const container_type = useFeature('text-container').on

    return (
        <div className='content'>
            <h1>Google Analytics playground</h1>
            <div className='main-content'>
                <div data-experiment-id='text-container' data-experiment-result={container_type} className={`experiment container version version-${container_type ? '2' : '1'}`}>
                    {container_type ?
                        <p>This is the <span className='highlight'>VARIANT</span></p>
                        :
                        <p>This is the <span className='highlight'>ORIGINAL</span></p>
                    }
                </div>
                <div className='container'>
                    <p style={{ marginBottom: '1rem' }}>Do you like cats?</p>
                    <div className="btns">
                        <button
                            className='submit btn btn-confirm'
                            data-submit-value='confirm'>Confirm
                        </button>
                        <button
                            className='submit btn btn-deny'
                            data-submit-value='deny'>Deny
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contents