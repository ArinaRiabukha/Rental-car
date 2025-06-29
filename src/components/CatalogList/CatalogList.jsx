import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import CatalogCard from "../CatalogCard/CatalogCard";

const CatalogList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {items.map((car) => (
        <CatalogCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CatalogList;
