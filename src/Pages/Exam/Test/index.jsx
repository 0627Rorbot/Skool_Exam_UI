import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Test_Home from "./Test_Home";
import Test_Main from "./Test_Main";
import TestList from "../../../Components/Test/testlist";

import { useToast } from "@chakra-ui/react";

import { readSubjects } from "../../../store/subject/subjectSlice";

const Test = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subject.subjects);

  useEffect(() => {
    dispatch(readSubjects());
  }, [dispatch]);

  const onTest = (id, title) => {
    // const url = `/test/home`;
    localStorage.setItem("subject_id", id);
    localStorage.setItem("subject_title", title);

    // window.open(url, "_blank");
  };

  // custom toast
  const showToast = (isSuccess = true, title = "", content = "") => {
    const status = isSuccess ? "success" : "error";
    toast({
      title: title,
      description: content,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      {/* {load ? <TSpinner /> : <></>} */}
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-10">Tests</h2>
          <div className="flex justify-center mb-5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              focusable="false"
              className="chakra-icon css-kt635p"
              height="6em"
              width="6em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"></path>
            </svg>
          </div>
          <p className="text-xl text-gray-400">
            Enter more topics and issues to accommodate more users. <br />
            However, you must enter the format correctly.
          </p>
        </div>
        <TestList subjects={subjects} onTest={onTest} />
      </div>
    </>
  );
};

export default Test;
