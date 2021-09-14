import "./Box.css";

const Box = ({ item }) => {
  return (
    <li className="box">
      <img
        className="box__img"
        src={
          item.images[0]
            ? item.images[0].urls["300x_"]
            : "https://picsum.photos/300/200"
        }
        alt="rasm"
      />
      <div className="box__text">
        <h3 className="box__titel">{item.name}</h3>

        <p className="box__supplier">Supplier name: {item.supplier}</p>

        {item.productProperties.length > 0 &&
          item.productProperties[0].name &&
          item.productProperties[0].value && (
            <p className="box__factory">
              {`${item.productProperties[0].name}: ${item.productProperties[0].value}`}
            </p>
          )}
        <p className="box__lastUpdate">{item.lastUpdateTime}</p>
      </div>
    </li>
  );
};

export default Box;
