'use client'
import AnalysisCard from "../components/ui/AnalysisCard";
import Table from "../components/ui/Table";
import useData from "../hooks/useData";

export default function Home() {
  const {totalValue, totalChangePer, totalChangeVal} = useData()
  return (<>
    <div className=" bg-b-secondary font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Portfolio Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <AnalysisCard value={'$ '+ totalValue.toFixed(2)} title={'Total Portfolio Value'}/>
          <AnalysisCard value={'$ '+ totalChangeVal.toFixed(2) } title={'24Change (value)'} color={totalChangeVal>=0?'text-success':'text-error'}/>
          <AnalysisCard value={totalChangePer.toFixed(2) + '%'} title={'24Change (%)'} color={totalChangePer>=0?'text-success':'text-error'}/>
        </div>
      </main>
      <Table/>
    </div>
  </>

  );
}
