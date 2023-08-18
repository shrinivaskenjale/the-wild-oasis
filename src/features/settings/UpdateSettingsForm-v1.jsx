import Spinner from "../../ui/Spinner";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import styles from "../../ui/Form.module.css";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

const UpdateSettingsForm = () => {
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    isLoading,
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  // return <Spinner />;
  if (isLoading) return <Spinner />;

  const handleBlur = (e, field) => {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  };

  // This time we are using UNCONTROLLED fields, so we will NOT store state
  return (
    <Form>
      <FormRow>
        <label htmlFor="min-nights">Minimum nights/booking</label>

        <input
          className={styles.input}
          type="number"
          defaultValue={minBookingLength}
          onBlur={(e) => handleBlur(e, "minBookingLength")}
          disabled={isUpdating}
          id="min-nights"
        />
      </FormRow>
      <FormRow>
        <label htmlFor="max-nights">Maximum nights/booking</label>
        <input
          className={styles.input}
          type="number"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleBlur(e, "maxBookingLength")}
          disabled={isUpdating}
          id="max-nights"
        />
      </FormRow>
      <FormRow>
        <label htmlFor="max-guests">Maximum guests/booking</label>
        <input
          className={styles.input}
          type="number"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleBlur(e, "maxGuestsPerBooking")}
          disabled={isUpdating}
          id="max-guests"
        />
      </FormRow>
      <FormRow>
        <label htmlFor="breakfast-price">Breakfast price</label>
        <input
          className={styles.input}
          type="number"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleBlur(e, "breakfastPrice")}
          disabled={isUpdating}
          id="breakfast-price"
        />
      </FormRow>
    </Form>
  );
};

export default UpdateSettingsForm;
