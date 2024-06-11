// * Hector Matus, 11/06/2024, Table Item a component that will render the data of the Table List component

import type { User } from "../../models/user.model";
import StatusTag from "../tags/StatusTag";

type TableItemProps = {
  item: User;
};
const TableItem = ({ item }: TableItemProps) => {
  const { name, favFood, favMovie, status, date } = item;
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">{favFood}</td>
      <td className="px-6 py-4">{favMovie}</td>
      <td className="px-6 py-4">
        <StatusTag status={status} />
      </td>
    </tr>
  );
};

export default TableItem;
