import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Heading,
  Center,
  Box,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Button,
  Text,
  Flex,
  Spacer,
  AbsoluteCenter,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { FaRegCircleUser } from "react-icons/fa6";

const levels = ["Beginner", "Intermediate", "Advanced", "Professional"];

const Test_Home = () => {
  console.log("home");

  const location = useLocation();
  const [count, setCount] = useState(10);

  const onTestStart = () => {
    if (count > 0) {
      localStorage.setItem("count", count);
    }
  };

  useEffect(() => {
    const id = location.id;
    const title = location.title;
    console.log(location);
  }, []);

  return (
    <div className="relative pt-32 pb-10 md:pt-40 md:pb-16 max-w-6xl mx-auto px-4 sm:px-6">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
          <div mt={20}>
            <Center mt={10}>
              <Heading fontSize={"20px"} fontWeight={400}>
                Count -- 
              </Heading>
              <NumberInput
                defaultValue={10}
                min={10}
                max={20}
                onChange={(value) => setCount(value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Center>
            <Center mt={20}>
              <button
                onClick={onTestStart}
              >
                <a
                  className="btn text-red-600 bg-red-100 hover:bg-white shadow"
                  href="/test/main"
                >
                  Start
                </a>
              </button>
            </Center>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test_Home;
