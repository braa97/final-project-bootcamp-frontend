import "./ServerError.css";

export default function ServerError() {
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
