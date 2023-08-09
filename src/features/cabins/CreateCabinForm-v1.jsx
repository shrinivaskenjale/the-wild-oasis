import styles from "./CreateCabinForm.module.css";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
// import FileInput from "../../ui/FileInput";
// import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({ cabinToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const { createCabin, isCreating } = useCreateCabin();
  const { editCabin, isEditing } = useEditCabin();

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    // console.log(data)
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession) {
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
    } else {
      // Since reset() cannot be passed to useCreateCabin, use reset here.
      createCabin(
        { ...data, image },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onClose ? "modal" : "regular"}
    >
      <FormRow>
        <label htmlFor="name">Cabin name</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
        {errors?.name?.message && (
          <span className={styles.error}>{errors?.name?.message}</span>
        )}
      </FormRow>

      <FormRow>
        <label htmlFor="maxCapacity">Maximum capacity</label>
        <input
          className={styles.input}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
        {errors?.maxCapacity?.message && (
          <span className={styles.error}>{errors?.maxCapacity?.message}</span>
        )}
      </FormRow>

      <FormRow>
        <label htmlFor="regularPrice">Regular price</label>
        <input
          className={styles.input}
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
        {errors?.regularPrice?.message && (
          <span className={styles.error}>{errors?.regularPrice?.message}</span>
        )}
      </FormRow>

      <FormRow>
        <label htmlFor="discount">Discount</label>
        <input
          className={styles.input}
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              Number(getValues().regularPrice) > Number(value) ||
              "Discount should be less than regular price",
            min: {
              value: 0,
              message: "Discount cannot be less than 0",
            },
          })}
        />
        {errors?.discount?.message && (
          <span className={styles.error}>{errors?.discount?.message}</span>
        )}
      </FormRow>

      <FormRow>
        <label htmlFor="description">Description for website</label>
        <textarea
          className={styles.textarea}
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
        {errors?.description?.message && (
          <span className={styles.error}>{errors?.description?.message}</span>
        )}
      </FormRow>

      <FormRow>
        <label htmlFor="image">Cabin photo</label>

        <input
          className={styles.fileInput}
          type="file"
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={() => onClose?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit" : "Create new"} cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
