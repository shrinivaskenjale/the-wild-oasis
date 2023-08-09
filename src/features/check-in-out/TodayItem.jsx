import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Flag from "../../ui/Flag";
import Tag from "../../ui/Tag";
import styles from "./TodayItem.module.css";
import CheckoutButton from "./CheckoutButton";

const TodayItem = ({ activity }) => {
  const { id, status, guests, nightCount } = activity;
  const navigate = useNavigate();

  return (
    <li className={styles.todayItem}>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}
      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <div className={styles.guest}>{guests.fullName}</div>
      <div>{nightCount} nights</div>

      {status === "unconfirmed" && (
        <Button
          variation="primary"
          size="small"
          onClick={() => navigate(`/checkin/${id}`)}
        >
          Check in
        </Button>
      )}

      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </li>
  );
};

export default TodayItem;
