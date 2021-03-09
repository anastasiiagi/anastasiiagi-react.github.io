import React from 'react'
import CompletedWorhCardItem from './CompletedWorhCardItem'

const CompletedWorhCardList = () => {
    return (
        <>
            <div className="completedWorh-wrap">
                <CompletedWorhCardItem 
                    title="980"
                    text="Project"
                />
                <CompletedWorhCardItem 
                    title="520"
                    text="Happy Client"
                />
                <CompletedWorhCardItem 
                    title="330"
                    text="Winners"
                />
                <CompletedWorhCardItem 
                    title="120"
                    text="Recoment"
                />
            </div>
        </>
    )
}

export default CompletedWorhCardList