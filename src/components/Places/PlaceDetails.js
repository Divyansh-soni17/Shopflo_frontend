import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlaceDetail } from "../../apis/placeApi";
import Loader from "../utils/Loader";
import Modal from "../utils/Modal";
import toast, { Toaster } from "react-hot-toast";

const PlaceDetails = () => {
  const { id } = useParams();
  const [placeDetail, setPlaceDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleRegistration = () => {
    toast.success("Registration successful.");
    setIsOpen(false);
  };

  useEffect(() => {
    fetchPlaceDetail();
  }, []);

  const fetchPlaceDetail = async () => {
    try {
      setLoading(true);
      const data = await getPlaceDetail(id);
      setPlaceDetail(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching place details:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col md:flex-row items-center bg-gray-100 p-4 mt-4 md:p-8">
           
          <div className="md:w-1/2">
            <img
              src={placeDetail.imageURL}
              alt={placeDetail.name}
              className="w-full h-auto object-cover rounded-md shadow-lg"
            />
          </div>

           
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {placeDetail.name}
            </h2>
            <p className="text-gray-700 mb-4">{placeDetail.description}</p>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="flex items-center mb-2 md:mb-0">
                <p className="text-blue-500 font-semibold mr-2">Price:</p>
                <p className="text-lg">${placeDetail.price}</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-500 mr-2">Zipcode:</p>
                <p className="text-lg">{placeDetail.zipcode}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-3 rounded-full cursor-pointer mt-6 font-semibold bg-blue-500 text-white hover:bg-blue-600"
              >
                Register
              </button>
            </div>
          </div>
          <div>
            <Modal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              handleRegistration={handleRegistration}
            />
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default PlaceDetails;
