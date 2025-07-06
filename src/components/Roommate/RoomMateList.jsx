import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import RoommateCard from "./RoomMateCard";

const RoommateList = () => {
  const { roommates } = useContext(AppContext);

  if (roommates.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No roommates added yet.</p>;
  }

  return (
    <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
      {roommates.map((roommate, id) => (
        <RoommateCard
          key={roommate.id}
           id={roommate.id}
          name={roommate.name}
          avatar={roommate.avatar}
        />
      ))}
    </div>
  );
};

export default RoommateList;
