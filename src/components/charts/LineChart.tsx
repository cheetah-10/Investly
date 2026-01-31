'use client'
import useData from "@/src/hooks/useData"
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const LineChartComponent = () => {
    const { data } = useData()

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={400} data={data}>
                <YAxis />
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="5 5" />
                <Line dataKey="change24h" stroke='#83B4D7'/>
            </LineChart>
        </ResponsiveContainer>

    )

}

export default LineChartComponent