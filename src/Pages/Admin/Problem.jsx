import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import SubjectList from "../../Components/Problems/subjectlist";

import {
  FormControl,
  FormLabel,
  Button,
  Input,
  FormHelperText,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";

import { FaRegFilePdf } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";

import {
  saveSubject,
  readSubjects,
  deleteSubject,
} from "../../store/subject/subjectSlice";

const Problem = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subject.subjects);

  useEffect(() => {
    dispatch(readSubjects());
  }, [dispatch]);

  // total subjects infos
  const [fileUrl, setFileUrl] = useState("");
  const [pdf_file, setPdf_File] = useState(undefined);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const my_file = useRef();

  // pdf upload file choose handler
  const onFileChange = (event) => {
    const file = event.target.files[0];
    setPdf_File(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };

  // delete subject by _id
  const onDeleteSubject = (subject_id) => {
    if (subject_id !== "") dispatch(deleteSubject(subject_id));
  };

  // save subject by input data
  const onSaveSubject = () => {
    if (
      pdf_file === undefined ||
      title.trim() === "" ||
      content.trim() === ""
    ) {
      showToast(false, "Error!", "Please input correctly.");
      return;
    }
    let subject = new FormData();
    subject.append("title", title);
    subject.append("content", content);
    subject.append("file", pdf_file);

    dispatch(saveSubject(subject));
    setContent("");
    setFileUrl("");
    setTitle("");
    setPdf_File(undefined);
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
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
        <Wrap justify="center" spacing={"30px"} size="lg">
          <WrapItem>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="React.js Test"
                value={title}
                size="lg"
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormHelperText>We need to input title.</FormHelperText>
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl>
              <FormLabel>Content</FormLabel>
              <Input
                placeholder="This is the best test for you."
                value={content}
                size="lg"
                onChange={(e) => setContent(e.target.value)}
              />
              <FormHelperText>We need to input content.</FormHelperText>
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl>
              <FormLabel>PDF Exam Problem URL</FormLabel>
              <Input
                type="text"
                placeholder="http://exam.pdf.com"
                size="lg"
                readOnly={true}
                value={fileUrl}
              />
              <FormHelperText>We need to input pdf url.</FormHelperText>
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl>
              <FormLabel>Exam Actions</FormLabel>
              <Wrap spacing="10px" justify="center">
                <WrapItem>
                  <Button
                    colorScheme="green"
                    onClick={() => my_file.current.click()}
                  >
                    <FaRegFilePdf />
                    PDF
                  </Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="blue" onClick={onSaveSubject}>
                    <GrDocumentUpdate />
                    Save
                  </Button>
                </WrapItem>
              </Wrap>
            </FormControl>
          </WrapItem>
        </Wrap>
      </div>

      <SubjectList subjects={subjects} onDelete={onDeleteSubject} />

      <Input
        type="file"
        className="hidden"
        ref={my_file}
        onChange={onFileChange}
      />
    </>
  );
};

export default Problem;
