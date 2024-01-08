import React, { useEffect, useState } from "react";
import MapView from "../Map/MapView";
import PlaceList from "../Places/PlaceList";
import { getAllPlaces } from "../../apis/placeApi";
import Loader from "../utils/Loader";
import Pagination from "../utils/Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPlace();
  }, [currentPage, limit]);

  const fetchPlace = async () => {
    try {
      setLoading(true);
      const data = await getAllPlaces(currentPage, limit);
      setPlaces(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col md:flex-row md:h-screen">
          {/* Left side - Map */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <MapView places={places} />
          </div>

          {/* Right side - Fixed frame with scrolling list */}
          <div className="w-full md:w-1/2 p-4 overflow-y-auto bg-gray-100">
            <PlaceList places={places} />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
