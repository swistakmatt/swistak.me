import style from "../styles/Home.module.scss";
import swistak_logo from "../assets/swistak.png";

const Home = () => {
  return (
    <div className={style.wrapper}>
      <img src={swistak_logo} alt="swistak_logo" className={style.logo} />
      <h1 className={style.name}>Mateusz Świstak</h1>
      <div>Studying Computer Science at Cracow University of Technology</div>
    </div>
  );
};

export default Home;
