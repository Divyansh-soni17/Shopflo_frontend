import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const totalPagesToShow = 5;

    if (totalPages <= totalPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(
        currentPage - Math.floor(totalPagesToShow / 2),
        1
      );
      const endPage = Math.min(startPage + totalPagesToShow - 1, totalPages);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 mr-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
      >
        &lt;
      </button>

      {getPageNumbers().map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`px-2 py-1 mx-1 0 text-black rounded-md ${
            currentPage === number ? "bg-gray-800 !text-white" : ""
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 ml-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
