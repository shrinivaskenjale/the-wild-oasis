import Button from "./Button";
import styles from "./ConfirmDelete.module.css";

const ConfirmDelete = ({ resourceName, onConfirm, disabled, onClose }) => {
  return (
    <div className={styles.confirmDelete}>
      <h1>Delete {resourceName}</h1>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button variation="secondary" disabled={disabled} onClick={onClose}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
