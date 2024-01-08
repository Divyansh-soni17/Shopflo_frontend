import React, { useEffect } from "react";
import { getAllPlaces } from "../../apis/placeApi";
import PlaceCard from "./PlaceCard";

const PlaceList = ({ places }) => {
  console.log(places);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
};

export default PlaceList;
