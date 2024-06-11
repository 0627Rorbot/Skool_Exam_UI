import React, { useEffect, useState } from "react";
import TestItem from "./testitem";
import { FaDatabase } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";

const TestList = ({ subjects, onTest }) => {
  // const [searchSubjects, setSearchSubjects] = useState([]);

  // const handleChangeSearch = (e) => {
  //   const search = e.target.value.toUpperCase().trim();

  //   if (search === "") setSearchSubjects(subjects);
  //   else {
  //     const res_subjects = subjects.filter((item) => {
  //       const title = item.title.toUpperCase().trim();
  //       const content = item.content.toUpperCase().trim();
  //       const count = `${item.cnt}`.toUpperCase().trim();

  //       if (
  //         title.indexOf(search) > -1 ||
  //         content.indexOf(search) > -1 ||
  //         count.indexOf(search) > -1
  //       )
  //         return true;
  //       else return false;
  //     });

  //     console.log(res_subjects);
  //     setSearchSubjects(res_subjects);
  //   }
  // };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-5 md:py-10 ">
          {/* search input */}
          <div className="max-w-sm mx-auto text-center pb-5 md:pb-10 lg:max-w-none">
            <InputGroup>
              <InputLeftElement pointerEvents="none" height={"50px"} p={2}>
                <FaSearch color="black" fontSize={"30px"} />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Search Tests"
                bg={"gray.300"}
                color={"black"}
                height={"50px"}
                fontSize={"20px"}
                // onChange={handleChangeSearch}
              />
            </InputGroup>
          </div>
          {/* Testimonials */}
          <div className="max-w-sm mx-auto justify-items-center  items-center lg:max-w-none">
            {subjects &&
              subjects.map((subject, i) => (
                <TestItem key={i} subject={subject} onTest={onTest}/>
              ))}
          </div>
          {subjects && subjects.length === 0 ? (
            <div>
              <div className="flex justify-center">
                <FaDatabase className="text-red-400 hover:text-red-200 text-9xl " />
              </div>
              <h2 className="h2 text-center text-red-400 mt-5">No Tests</h2>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestList;
