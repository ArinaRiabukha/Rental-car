import CatalogButton from "../../components/CatalogButton/CatalogButton";
import Navigation from "../../components/Navigation/Navigation";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <div className={s.background}>
        <div className={s.info}>
          <h1 className={s.title}>Find your perfect rental car</h1>
          <p className={s.text}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <CatalogButton />
        </div>
      </div>
    </>
  );
};

export default HomePage;
