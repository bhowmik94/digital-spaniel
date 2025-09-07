import LinkContainer from "./LinkContainer";
import DescriptionContainer from "./DescripContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandData } from "../redux/brandSlice";
import type { AppDispatch, RootState } from "../redux/store";
import { useIsMobile } from "../hooks/usIsMobile";

const linkData = [
  {
    name: "BRAND",
    linkNames: ["Brand Strategy", "Logo & Name", "Identity & Collateral"],
  },
  {
    name: "DEVELOPMENT",
    linkNames: ["eCommerce", "Web Development", "Mobile Apps"],
  },
  {
    name: "MARKETING",
    linkNames: ["Digital", "Market"],
  },
];

const Brand = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.brand);
  const [hoveredItem, setHoveredItem] = useState<null | (typeof linkData)[0]>(
    null
  );
  const isMobile = useIsMobile();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBrandData());
    }
  }, [status, dispatch]);


  return (
    <div className="flex flex-col md:flex-row w-full p-8 bg-[#EDEFF1]">
      {/* Left side */}
      <div className="w-full md:w-1/2 h-1/2 flex items-center justify-center">
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            hoveredItem ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {hoveredItem && data && (
            <DescriptionContainer
              partial1={data.partial1}
              partial2={data.partial2}
              paragraph={data.paragraph}
              link={data.link}
            />
          )}
        </div>
      </div>

      {/* Right side */}
      <div
        className="w-full md:w-1/2 p-8 
                   grid grid-cols-1 md:grid-flow-col auto-cols-fr md:grid-rows-2 gap-4"
      >
        {linkData.map((item, index) => (
          <LinkContainer
            key={index}
            name={item.name}
            linkNames={item.linkNames}
            onHover={!isMobile ? () => setHoveredItem(item) : undefined} 
            onLeave={!isMobile ? () => setHoveredItem(null) : undefined}
            onClick={isMobile ? () => setHoveredItem(item) : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Brand;
