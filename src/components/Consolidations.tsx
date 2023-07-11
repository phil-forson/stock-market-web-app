import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

const Consolidations = () => {
  return (
    <div className="bg-white p-5 rounded-[15px] consolidations">
      <div className="text-[20px] text-center font-bold">Channel Detection</div>
      <div className="w-[90%] m-auto pt-5">
        <table className="w-full">
          <thead>
            <tr>
              <td>Channel</td>
              <td>Strength</td>
              <td>Breakout</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Consolidation</td>
              <td>0 - 1</td>
              <td className="flex items-center justify-evenly">
                0.5
                <BsFillArrowUpCircleFill color="green" />
                <BsFillArrowDownCircleFill color="#c30101" /> 0.5
              </td>
            </tr>
            <tr>
              <td>Structure</td>
              <td>0 - 1</td>
              <td className="flex items-center justify-evenly">
                0.5
                <BsFillArrowUpCircleFill color="green" />
                <BsFillArrowDownCircleFill color="#c30101" /> 0.5
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Consolidations;
