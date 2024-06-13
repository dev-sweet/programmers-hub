import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-semibold">Programmers Squad</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-2">
            <Link
              to="/dashboard"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/my-courses"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Your Courses
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/add-course"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Add a Course
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/assignments"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Assignments
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
