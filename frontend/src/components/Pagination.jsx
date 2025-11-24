import React from "react";

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-8">
      
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-4 py-2 font-semibold">
        Page {page} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;
