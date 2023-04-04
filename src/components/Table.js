import { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  const tableElements = data.map((rowData) => {
    const renderedRow = config.map((column) => {
      return (
        <td key={column.label} className="p-3">
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedRow}
      </tr>
    );
  });

  const renderedHeaders = config.map((column) => {
    return column.header ? (
      <Fragment key={column.label}>{column.header()}</Fragment>
    ) : (
      <th key={column.label}>{column.label}</th>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{tableElements}</tbody>
    </table>
  );
};

export default Table;
