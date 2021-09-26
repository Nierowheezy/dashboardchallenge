// import hello from "../../assets/hello.svg";
// import Chart from "../charts/Chart";
import NavItem from "../../layout/Navigation/NavItem.jsx";
import Activities from "../activities/Activities.js";
import Cards from "../cards/Cards.js";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          {/* <img src={hello} alt="hello" /> */}
          <div
            className="main__greeting"
            style={{ color: "#526A98", fontWeight: "700" }}
          >
            <NavItem name="Dashboard" link="/dashboard" />
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}

        <Cards />

        {/* <!-- MAIN CARDS ENDS HERE --> */}

        <Activities />
      </div>
    </main>
  );
};

export default Main;
