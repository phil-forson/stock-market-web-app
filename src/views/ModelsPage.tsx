import CandleStickChart from "../components/ModelsScreen/CandleStickChart";
import Consolidations from "../components/ModelsScreen/Consolidations";
import IndicatorsSection from "../components/ModelsScreen/IndicatorsSection";
import ModelsSection from "../components/ModelsScreen/ModelsSection";
import Nav from "../components/shared/Nav/Nav";

const ModelsPage = () => {
  return (
    <div>
      <Nav />
      <div className="grid-container bg-[#f8f8fa]">
        <CandleStickChart />
        <ModelsSection />
        <IndicatorsSection />
        <Consolidations />
      </div>
      </div>
  );
};

export default ModelsPage;
