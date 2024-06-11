// * Hector Matus, 11/06/2024, Tag component for user status
import { statusEnum } from "../../models/user.model";

const StatusTag = ({ status }: { status: statusEnum }) => {
  return (
    <div>
      {status === statusEnum.Inactive ? (
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          Inactive
        </span>
      ) : (
        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Active
        </span>
      )}
    </div>
  );
};

export default StatusTag;
