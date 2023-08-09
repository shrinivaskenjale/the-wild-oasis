import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import styles from "./Pagination.module.css";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

// const StyledPagination = styled.div`

// `;

// const P = styled.p`

// `;

// const Buttons = styled.div`

// `;

// const PaginationButton = styled.button`
// background-color: ${(props) =>
//   props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
// color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
// border: none;
// border-radius: var(--border-radius-sm);
// font-weight: 500;
// font-size: 1.4rem;

// display: flex;
// align-items: center;
// justify-content: center;
// gap: 0.4rem;
// padding: 0.6rem 1.2rem;
// transition: all 0.3s;

// &:has(span:last-child) {
//   padding-left: 0.4rem;
// }

// &:has(span:first-child) {
//   padding-right: 0.4rem;
// }

// & svg {
//   height: 1.8rem;
//   width: 1.8rem;
// }

// &:hover:not(:disabled) {
//   background-color: var(--color-brand-600);
//   color: var(--color-brand-50);
// }
// `;

const Pagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  };

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  if (pageCount <= 1) return null;

  return (
    <div className={styles.pagination}>
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <div className={styles.buttons}>
        <button
          className={styles.paginationBtn}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft /> <span>Previous</span>
        </button>
        <button
          className={styles.paginationBtn}
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span> <HiChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Pagination;
