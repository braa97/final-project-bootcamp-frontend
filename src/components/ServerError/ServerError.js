import "./ServerError.css";
import React, { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";


export default function ServerError() {
  const navigate = useNavigate();

  const apiManager = new ApiManager();
  const { status } = useQuery('status', async () => {
    let response = await apiManager.checkServerConnection();
    return response.status
  })

  // if (status ==)

  return (
    <div className="server-error-card-container">
    <div className="server-error-card">
      <h2 className="server-error-title"><b>Server Error</b> 500</h2>
      <p className="server-error-message">Oops, something went wrong.</p>
      <p className="server-error-tip">
        Try to refresh this page, or feel free to contact us.
      </p>
    </div>
    </div>
  );
}
