import styles from "./CabinTable.module.css";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

function Table({ children }) {
  return (
    <div className={styles.table} role="table">
      {children}
    </div>
  );
}

function TableHeader({ children }) {
  return <div className={styles.tableHeader}>{children}</div>;
}

function CabinTable() {
  const { cabins, isLoading } = useCabins();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Table>
      <TableHeader>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
