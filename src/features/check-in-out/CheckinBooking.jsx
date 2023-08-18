import styles from "./CheckinBooking.module.css";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
// import { add } from "date-fns";
// import { id } from "date-fns/locale";
import { useSettings } from "../settings/useSettings";

const CheckinBooking = () => {
  const { settings, isLoadingSettings } = useSettings();
  const [addBreakfast, setAddBreakfast] = useState(false);
  const [confirmPayment, setConfirmPayment] = useState(false);
  const { booking, isLoading } = useBooking();
  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();

  useEffect(() => {
    setConfirmPayment(booking?.isPaid ?? false);
  }, [booking?.isPaid]);

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    guestCount,
    hasBreakfast,
    nightCount,
  } = booking;
  const optionalBreakfastPrice =
    settings?.breakfastPrice * nightCount * guestCount;

  const handleCheckin = () => {
    if (!confirmPayment) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  };

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <div className={styles.box}>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((addBreakfast) => !addBreakfast);
              setConfirmPayment(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </div>
      )}

      <div className={styles.box}>
        <Checkbox
          checked={confirmPayment}
          disabled={confirmPayment || isCheckingIn}
          onChange={() =>
            setConfirmPayment((confirmPayment) => !confirmPayment)
          }
          id={"confirm"}
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </Checkbox>
      </div>

      <ButtonGroup>
        <Button
          onClick={handleCheckin}
          disabled={!confirmPayment || isCheckingIn}
        >
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
};

export default CheckinBooking;
