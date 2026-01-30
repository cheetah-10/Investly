import AnalysisCard from "../components/ui/AnalysisCard";

export default function Home() {
  return (<>
    <div className=" bg-b-secondary font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Portfolio Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <AnalysisCard value={'$158000'} title={'Total Portfolio Value'} />
          <AnalysisCard value={'$-850'} title={'24Change (value)'} />
          <AnalysisCard value={'-0.8%'} title={'24Change (%)'} />
        </div>
        </main>
    </div>
  </>

  );
}
