import React, { useEffect, useState } from 'react';
import './App.css';
import { getNumbers } from './utils';
import { Pagination } from './components/Pagination';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = getNumbers(1, 42).map(n => `Item ${n}`);

export const App: React.FC = () => {
  const [total, setTotal] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPage] = useState<string[]>([]);

  useEffect(() => {
    setTotal(items.length);
    setCurrentPage(1);
    setPage(items);
  }, []);

  const filteredPage =
    currentPage === 1
      ? pages.slice(0, perPage)
      : pages.slice(perPage * currentPage - perPage, perPage * currentPage);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(+event.target.value);
    setCurrentPage(1);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1>Items with Pagination</h1>

      <p className="lead" data-cy="info">
        Page {currentPage} (items {perPage * currentPage - perPage + 1} -
        {perPage * currentPage} of {total})
      </p>

      <div className="form-group row">
        <div className="col-3 col-sm-2 col-xl-1">
          <select
            data-cy="perPageSelector"
            id="perPageSelector"
            className="form-control"
            onChange={onChange}
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        <label htmlFor="perPageSelector" className="col-form-label col">
          items per page
        </label>
      </div>

      {/* Move this markup to Pagination */}

      <Pagination
        total={total}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={page => onPageChange(page)}
      />

      <ul>
        {filteredPage.map(item => (
          <li key={item} data-cy="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
