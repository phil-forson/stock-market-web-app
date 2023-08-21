import CandleStickChart from "../components/ModelsScreen/CandleStickChart";
import Consolidations from "../components/ModelsScreen/Consolidations";
import IndicatorsSection from "../components/ModelsScreen/IndicatorsSection";
import ModelsSection from "../components/ModelsScreen/ModelsSection";

const ModelsPage = () => {
  return (
      <div className="grid-container bg-[#f8f8fa]">
        <CandleStickChart />
        <ModelsSection />
        <IndicatorsSection />
        <Consolidations />
      </div>
  );
};

export default ModelsPage;
