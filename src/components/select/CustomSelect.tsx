// * Hector Matus, 11/06/2024, Generic select component with custom styles
export type Option = {
  label: string;
  value: string;
};
interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}
const CustomSelect = ({ options, ...props }: Props) => {
  return (
    <select
      {...props}
      className={`${props.className} w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
