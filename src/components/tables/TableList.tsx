import { useState } from "react";
import CustomSelect, { type Option } from "../select/CustomSelect";
import TableItem from "./TableItem";
export enum filterOptions {
  All = "All",
  Active = "Active",
}
type TableListProps<T> = {
  header: string[];
  data: T[];
  options: Option[];
  optionValue: string;
  onChangeOption: (option: string) => void;
};
const TableList = <T,>({
  header,
  data,
  options,
  optionValue,
  onChangeOption,
}: TableListProps<T>) => {
  const handleSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeOption(e.target.value as string);
  };
  if (data.length === 0) return null;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <CustomSelect
        options={options}
        onChange={handleSelectOption}
        value={optionValue}
      />
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
