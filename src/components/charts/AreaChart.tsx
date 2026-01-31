'use client'
import useData from "@/src/hooks/useData"
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const AreaChartComponent = () => {
    const { data } = useData()

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={400} data={data}>
                <YAxis />
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip />
                <Legend />

                <Area type="monotone" dataKey="currentPrice" />
            </AreaChart>
        </ResponsiveContainer>

    )

}

export default AreaChartComponent