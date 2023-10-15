import React from "react";

const Paginate = props => {
  return (
    <nav>
      <ul className="pagination justify-content-center border-0">
        <li className={`page-item ${props.currentPage === 1 ? "disabled" : ""}`}>
          <a
            onClick={() => props.pageSelected(props.currentPage - 1)}
            href="!#"
            className="page-link rounded"
          >
            Previous
          </a>
        </li>
        <li className="page-item active">
          <a
            href="!#"
            className="page-link rounded"
          >
            {props.currentPage}
          </a>
        </li>
        <li className={`page-item ${props.currentPage === Math.ceil(props.totalItems / props.itemsPerPage) ? "disabled" : ""}`}>
          <a
            onClick={() => props.pageSelected(props.currentPage + 1)}
            href="!#"
            className="page-link rounded"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
