import React from "react";
import Dashboard from "../../Coordinator_Dashboard/dashboard/Dashboard";
import { useParams } from "react-router-dom";

export default function CoordinatorHome() {
  const { id } = useParams();
  return (
    <div>
      <Dashboard coordinatorId={id} />
    </div>
  );
}
