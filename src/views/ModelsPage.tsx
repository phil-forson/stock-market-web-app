import CandleStickChart from "../components/CandleStickChart";
import Consolidations from "../components/Consolidations";
import IndicatorsSection from "../components/IndicatorsSection";
import ModelsSection from "../components/ModelsSection";

const ModelsPage = () => {
  return (
    <>
      <div className="grid-container bg-[#f8f8fa]">
        <CandleStickChart />
        <ModelsSection />
        <IndicatorsSection />
        <Consolidations />
      </div>
    </>
  );
};

export default ModelsPage;
