import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
    { name: "Brinjal", color: "bg-purple-500", score: 9 },
  ];
  const config = [
    {
      label: "Name",
      render: (fruit) => {
        return fruit.name;
      },
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => {
        return <div className={`p-2 m-3 ${fruit.color}`}></div>;
      },
    },
    {
      label: "Score",
      render: (fruit) => {
        return fruit.score;
      },
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <h1>Normal Table</h1>
      <Table data={data} config={config} keyFn={keyFn} />
      <br></br>
      <br></br>
      <br></br>
      <h1>Sortable Table</h1>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
