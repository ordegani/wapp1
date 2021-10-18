import { React } from "react";
import Result from "./Result";

export default function Saved({ save, setsave }) {
  // useEffect(() => {
  //   const fetch = async () => {
  //     const data = await axios.get("http://localhost:5000/");
  //     console.log(data);
  //   };
  //   fetch();
  // }, []);

  save.forEach((element) => {
    console.log(element);
  });
  const remove = (element) => {
    setsave(save.filter((save) => save.GeoPosition !== element.GeoPosition));
  };

  // useEffect(() => {
  //   const postSave = () => {
  //     axios.post("/api/users/login", save).then((res) => console.log(res));
  //     console.log(save);
  //   };
  //   return () => {
  //     postSave();
  //   };
  // }, [save]);

  return (
    <div className="homeContainer">
      <button
        className={save.length !== 1 ? "hidden" : "reset"}
        onClick={() => setsave([])}
      >
        Reset
      </button>

      <div className="savedMoviesContainer">
        {save.map((save) => (
          <Result
            LocalizedName={location[2].LocalizedName}
            Latitude={location[4].GeoPosition.Latitude}
            Longitude={location[4].GeoPosition.Longitude}
            onClick={remove}
            text="Delete"
          />
        ))}
      </div>
    </div>
  );
}
