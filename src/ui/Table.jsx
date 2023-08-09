import { createContext, useContext } from "react";
import styles from "./Table.module.css";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className={styles.table} role="table">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <header
      className={`${styles.commonRow} ${styles.tableHeader}`}
      style={{ gridTemplateColumns: columns }}
      role="row"
    >
      {children}
    </header>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      className={`${styles.commonRow} ${styles.tableRow}`}
      style={{ gridTemplateColumns: columns }}
      role="row"
    >
      {children}
    </div>
  );
}
function Body({ data, render }) {
  if (!data.length) {
    return <EmptyTable>There is no data to show at the moment</EmptyTable>;
  }
  return <section className={styles.tableBody}>{data.map(render)}</section>;
}
function Footer({ children }) {
  return <footer className={styles.tableFooter}>{children}</footer>;
}
function EmptyTable({ children }) {
  return <p className={styles.emptyTable}>{children}</p>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
