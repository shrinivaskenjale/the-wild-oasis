import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

// function AddCabin() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleClose = () => setIsModalOpen(false);

//   return (
//     <div>
//       <Button onClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)}>
//         Add new cabin
//       </Button>
//       {isModalOpen && (
//         <Modal onClose={handleClose}>
//           <CreateCabinForm onClose={handleClose} />
//         </Modal>
//       )}
//     </div>
//   );
// }

const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AddCabin;
