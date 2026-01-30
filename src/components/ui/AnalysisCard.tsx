import React from 'react'

type propsType = {
    title: string,
    value: string
    color?: string
}

const AnalysisCard = ({ title, value, color='text-t-primary' }: propsType) => {
    return (
        <div className="bg-b-main rounded-lg shadow-sm border border-border p-4">
            <p className="text-sm text-t-secondary mb-1">{title}</p>
            <p className={`text-2xl font-bold ${color}`}>
               {value}
            </p>
        </div>
    )
}

export default AnalysisCard