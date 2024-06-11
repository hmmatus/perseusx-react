import TableList from "./components/tables/TableList";
import { users } from "./utils/mocks/users";
import { statusEnum, type User } from "./models/user.model";
import { useEffect, useState } from "react";
import CustomSelect from "./components/select/CustomSelect";
import TableItem from "./components/tables/TableItem";
const header = ["Name", "Date", "Favorite Food", "Favorite Movie", "Status"];
const filterOptions = [
  { label: "All", value: "All" },
  { label: "Active", value: "Active" },
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const handleSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value as string);
  };
  // TODO <partner> This is a pseudo code that i made for how to sort the data by property but i don't know the type of the property, please provide me the type of the property so i can implement it.
  // function sortByProperty(property: any) {
  //   activeRecords.sort((a: User, b: User) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0));
  //   activeRecords.forEach(obj => {
  //     console.log(`Name: ${obj.name}, Date: ${obj.date}, Favorite Movie: ${obj.favMovie}`);
  //   });
  // }

  // useEffect to add the current date to the users at first render
  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    const updatedUsers = users.map((obj) => ({
      ...obj,
      date: currentDate,
    }));
    setFilteredUsers(updatedUsers);
  }, []);

  // Simulation of the filter call by filter options
  const fetchData = async (filter: string) => {
    if (filter === "All") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter((obj) => obj.status === statusEnum.Active));
    }
  };

  useEffect(() => {
    fetchData(selectedOption);
  }, [selectedOption]);

  return (
    <main className="flex flex-col p-2 lg:p-12 bg-slate-900 min-h-screen">
      <CustomSelect
        options={filterOptions}
        onChange={handleSelectOption}
        value={selectedOption}
        className="mb-4"
      />
      <TableList
        header={header}
        data={filteredUsers}
        ItemComponent={TableItem}
      />
    </main>
  );
};

export default App;
