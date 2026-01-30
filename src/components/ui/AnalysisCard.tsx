import React from 'react'

type propsType = {
    title: string,
    value: string
}

const AnalysisCard = ({ title, value }: propsType) => {
    return (
        <div className="bg-b-main rounded-lg shadow-sm border border-border p-4">
            <p className="text-sm text-t-secondary mb-1">{title}</p>
            <p className="text-2xl font-bold text-t-primary">
               {value}
            </p>
        </div>
    )
}

export default AnalysisCard