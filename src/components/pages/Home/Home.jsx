import Layout from "../../common/Layout";
import Button from "../../ui/Button/Button"; 
import Counters from "../../ui/Counters/Counters";
import styles from "./Home.module.scss";
import bgImage from "../../../images/home-bg.jpg";
import bgImage1 from "../../../images/coachv2.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout bgImage={bgImage1}>
      <div>
        <Button type="main" callback={() => {navigate("/new-workout")}} text="New" />
        <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
        <Counters />
      </div>
    </Layout>
  );
};
export default Home;
