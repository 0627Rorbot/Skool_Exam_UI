import { RiDeleteBin6Line } from "react-icons/ri";

const SubjectItem = ({ subject, onDelete }) => (
  <div
    className="flex flex-col h-full w-full p-6 bg-gray-800 "
    data-aos="fade-up fade-in"
  >
    <div className="mb-6 lg:mb-0 text-center border-b border-gray-700">
      <h4 className="h4 text-white mb-5 text-center">
        {subject.title.toUpperCase()}
      </h4>
    </div>
    <blockquote className="text-lg text-gray-400 grow ">
      {subject.content}
    </blockquote>
    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
      <ul className="flex justify-between">
        <li>
          <cite className="text-gray-200 not-italic">Problem Counts</cite> -
          <a
            className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
            href="#0"
          >
            {subject.cnt}
          </a>
        </li>
        <li>
          <button onClick={() => onDelete(subject._id)}>
            <RiDeleteBin6Line
              fontSize="30px"
              className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out"
            />
          </button>
        </li>
      </ul>
    </div>
  </div>
);

export default SubjectItem;
