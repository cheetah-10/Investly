import AreaChart from "@/src/components/charts/AreaChart"
import BarChartComponent from "@/src/components/charts/BarChart"
import LineChartComponent from "@/src/components/charts/LineChart"

const Analytics = () => {
  return (
    <main className="flex flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-34 bg-b-secondary">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-350">
            <GridItem >
                <AreaChart/>
            </GridItem>
            <GridItem>
                <BarChartComponent/>
            </GridItem>
            <GridItem>
                <LineChartComponent/>
            </GridItem>
            
        </div>
    </main>
  )
}
function GridItem({children}: {children?: React.ReactNode}) {
    return (
        <div className="flex flex-col items-center justify-center p-4 border border-border bg-b-main rounded-xl h-100">
            {children}
        </div>
    )
}
export default Analytics