import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

const Stats = ({ bookings, confirmedStays, dayCount, cabinCount }) => {
  const bookingCount = bookings.length;
  const sales = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);
  const checkIns = confirmedStays.length;
  const daysOccupiedByGuests = confirmedStays.reduce(
    (acc, stay) => acc + stay.nightCount,
    0
  );
  const occupancyRate = (daysOccupiedByGuests / (cabinCount * dayCount)) * 100;
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={bookingCount}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancyRate) + "%"}
      />
    </>
  );
};

export default Stats;
