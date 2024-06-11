import TableList from "./components/tables/TableList";
import { users } from "./utils/mocks/users";
import { statusEnum, type User } from "./models/user.model";
import { useEffect, useState } from "react";
import { set } from "astro/zod";
const header = [
  "Name",
  "Date",
  "Favorite Food",
  "Favorite Movie",
  "Status",
  "Action",
];
const filterOptions = [
  { label: "All", value: "All" },
  { label: "Active", value: "Active" },
];
const currentDate = new Date().toISOString().split("T")[0];

const App = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  // *
  //
  // function sortByProperty(property: any) {
  //   activeRecords.sort((a: User, b: User) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0));
  //   activeRecords.forEach(obj => {
  //     console.log(`Nombre: ${obj.name}, Fecha: ${obj.date}, Película Favorita: ${obj.favMovie}`);
  //   });
  // }
  useEffect(() => {
    users.forEach((obj) => {
      obj.date = currentDate;
    });
  }, []);

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
    <main>
      <TableList
        header={header}
        data={filteredUsers}
        options={filterOptions}
        onChangeOption={(val) => setSelectedOption(val)}
        optionValue={selectedOption}
      />
    </main>
  );
};

export default App;
