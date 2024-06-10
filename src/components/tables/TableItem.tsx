import type { User } from "../../models/user.model";

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
      <td className="px-6 py-4">{status}</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

export default TableItem;
