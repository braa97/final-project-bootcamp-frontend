import "./Home.css";
import "./Widgets/Widgets";
import "./ApartmentsTable/ApartmentsTable";
import Widgets from "./Widgets/Widgets";
import ApartmentsTable from "./ApartmentsTable/ApartmentsTable";

export default function Home() {
  return (
    <>
      <div className="home-page">
        <div className="home-container">
          <Widgets />
          <ApartmentsTable />
        </div>
      </div>
    </>
  );
}
