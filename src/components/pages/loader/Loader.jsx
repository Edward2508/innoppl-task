import { ThreeDots } from "react-loader-spinner";
import "./Loader.css";
const Loader = () => {
  return (
    <>
      <div className="loader d-flex justify-content-center align-items-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#515696"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Loader;
