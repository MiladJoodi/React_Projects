import React from "react";
import "./Home.css";
import SecondDashboard from "../../Components/SecondDashboard";
import QuickMenu from "../../Components/QuickMenu";
import MonthlyReport from "../../Components/MonthlyReport";
import Reports from "../../Components/Reports";
import Chat from "../../Components/Chat";
import Userlist from "../../Components/Userlist";
import LastestOrder from "../../Components/LastestOrder";
import InfoBox from "../../Components/InfoBox";
import Browser from "../../Components/Browser/Browser";
import NewProductList from "../../Components/NewProductList";
import Footer from "../../Components/Footer";

function Home() {
  return (
    <div className="content-wrapper">
      {/* header */}
      <div className="content-header">
        <div className="container-fluid">
          <SecondDashboard />
        </div>
      </div>

      {/* content */}
      <section className="content">
        <div className="container-fluid">
          <QuickMenu />
          <MonthlyReport />



      <div className="row">
        <div class="col-md-8">
          <Reports />
          <div className="row">
            <Chat />
            <Userlist />
          </div>
          <LastestOrder />
        </div>
        <div className="col-md-4">
          <InfoBox />
          <Browser />
          <NewProductList />
        </div>
      </div>
      </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
