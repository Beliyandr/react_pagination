import React from 'react';
import { getNumbers } from '../../utils';
// import { createArrayNumbers } from '../../utils';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const calcPages = Math.ceil(total / perPage);
  const leftArrowDisabled = currentPage === 1 ? 'disabled' : '';
  const rigthArrowDisabled = currentPage === calcPages ? 'disabled' : '';

  const paginationNumbers = getNumbers(1, calcPages);

  return (
    <ul className="pagination">
      <li className={`page-item ${leftArrowDisabled} `}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled="true"
          onClick={() => onPageChange(currentPage - 1)}
        >
          «
        </a>
      </li>
      {paginationNumbers.map(number => (
        <li
          key={number}
          className={`page-item ${number === currentPage ? 'active' : ''}`}
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href={`#${number}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </a>
        </li>
      ))}

      <li className={`page-item ${rigthArrowDisabled} `}>
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled="false"
          onClick={() => onPageChange(currentPage + 1)}
        >
          »
        </a>
      </li>
    </ul>
  );
};
