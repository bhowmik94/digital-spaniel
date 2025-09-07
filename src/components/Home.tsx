import DescriptionContainer from "./DescripContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDescriptionData } from "../redux/descriptionSlice";
import type { AppDispatch, RootState } from "../redux/store";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.description);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDescriptionData());
    }
  }, [status, dispatch]);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 bg-white">
        {data && (
          <DescriptionContainer
            firstHeader={data.firstHeader}
            partial1={data.partial1}
            partial2={data.partial2}
            paragraph={data.paragraph}
            link={data.link}
          />
        )}
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src="/Spaniel01_gradient.png"
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
