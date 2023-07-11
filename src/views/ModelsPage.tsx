import CandleStickChart from "../components/CandleStickChart"
import IndicatorsSection from "../components/IndicatorsSection"
import ModelsSection from "../components/ModelsSection"

const ModelsPage = () => {
  return (
    <>
    <div className="grid-container bg-[#f8f8fa]">
        <CandleStickChart />
        <ModelsSection />
        <IndicatorsSection />
      </div>
    </>
  )
}

export default ModelsPage