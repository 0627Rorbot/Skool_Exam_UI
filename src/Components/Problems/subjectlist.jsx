import SubjectItem from "./subjectitem";

import { FaDatabase } from "react-icons/fa6";

export default function SubjectList({ subjects, onDelete }) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">All Subjects</h2>
            <p className="text-xl text-gray-400">
              Enter more topics and issues to accommodate more users. <br />
              However, you must enter the format correctly.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 justify-items-center  items-center lg:max-w-none">
            {subjects &&
              subjects.map((subject, i) => (
                <SubjectItem subject={subject} key={i} onDelete={onDelete} />
              ))}
          </div>
          {subjects && subjects.length === 0 ? (
            <div>
              <div className="flex justify-center">
                <FaDatabase className="text-red-400 hover:text-red-200 text-9xl " />
              </div>
              <h2 className="h2 text-center text-red-400 mt-5">No Subjects</h2>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}
