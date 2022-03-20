import styles from "./location-step.module.scss";
import CitySearch from "../city-search";
import PickupPoint from "../pickup-point";
import map from "../../assets/images/map.png";

export default function LocationStep() {
  return (
    <div className={styles.location}>
      <CitySearch />
      <PickupPoint />
      <p className={styles.map_text}>Выбрать на карте:</p>
      <div>
        <img className={styles.map} src={map} alt="map" />
      </div>
    </div>
  );
}
