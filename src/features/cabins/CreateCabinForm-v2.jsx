import Form from "../../ui/Form";
import Button from "../../ui/Button";
// import FileInput from "../../ui/FileInput";
// import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
import FormRow from "../../ui/FormRow";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import FormFieldError from "../../ui/FormFieldError";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";

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
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
        {errors?.name?.message && (
          <FormFieldError>{errors?.name?.message}</FormFieldError>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
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
          <FormFieldError>{errors?.maxCapacity?.message}</FormFieldError>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
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
          <FormFieldError>{errors?.regularPrice?.message}</FormFieldError>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
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
          <FormFieldError>{errors?.discount?.message}</FormFieldError>
        )}
      </FormRow>

      {/* <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          id="description"
          register={register}
          name="description"
          options={{
            required: "This field is required",
          }}
        />
        {errors?.description?.message && (
          <FormFieldError>{errors?.description?.message}</FormFieldError>
        )}
      </FormRow> */}
      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          id="description"
          {...register("description", {
            required: "This field is required",
          })}
        />
        {errors?.description?.message && (
          <FormFieldError>{errors?.description?.message}</FormFieldError>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>

        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
        {errors?.image?.message && (
          <FormFieldError>{errors?.image?.message}</FormFieldError>
        )}
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
