import TableItem from "./TableItem";
type TableListProps<T> = {
  header: string[];
  data: T[];
};
const TableList = <T,>({ header, data }: TableListProps<T>) => {
  if (data.length === 0) return null;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {header.map((item: string) => (
              <th scope="col" className="px-6 py-3">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <TableItem key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
