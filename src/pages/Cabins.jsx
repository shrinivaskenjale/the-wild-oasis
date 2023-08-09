import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
      <Row>
        <Heading type="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row direction="y">
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
