const CatalogCard = ({ car }) => {
  return (
    <div>
      <img src={car.img} alt={car.brand} />
      <h2>
        {car.brand} {car.model}
      </h2>
      <p>{car.description}</p>
    </div>
  );
};
export default CatalogCard;
