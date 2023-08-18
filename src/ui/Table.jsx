import { createContext, useContext } from "react";
import styles from "./Table.module.css";

const TableContext = createContext();

const Table = ({ columns, children }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className={styles.table} role="table">
        {children}
      </div>
    </TableContext.Provider>
  );
};

const Header = ({ children }) => {
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
};

const Row = ({ children, className }) => {
  const { columns } = useContext(TableContext);

  return (
    <div
      className={`${styles.commonRow} ${styles.tableRow} ${className}`}
      style={{ gridTemplateColumns: columns }}
      role="row"
    >
      {children}
    </div>
  );
};

const Body = ({ data, render }) => {
  if (!data.length) {
    return <EmptyTable>There is no data to show at the moment</EmptyTable>;
  }
  return <section className={styles.tableBody}>{data.map(render)}</section>;
};

const Footer = ({ children }) => {
  return <footer className={styles.tableFooter}>{children}</footer>;
};

const EmptyTable = ({ children }) => {
  return <p className={styles.emptyTable}>{children}</p>;
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
