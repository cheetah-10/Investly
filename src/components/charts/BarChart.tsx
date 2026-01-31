'use client'
import useData from "@/src/hooks/useData"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const BarChartComponent = () => {
    const { data } = useData()

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={400} data={data}>
                <YAxis />
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="5 5" />
                <Bar dataKey="quantity" stroke='#83B4D7' fill='#83B4D7'/>
            </BarChart>
        </ResponsiveContainer>

    )

}

export default BarChartComponent