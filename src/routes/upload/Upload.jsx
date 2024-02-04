import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import { useDropzone } from "react-dropzone";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import ExcelIcon from "../../assets/ms-excel.svg";
import UploadIcon from "../../assets/upload.svg";
import { UploadTable } from "./table/UploadTable";
import { uploadData } from "../../data/uploadData";
import { useMediaQuery } from "react-responsive";

const Upload = () => {
  const isMobileTablet = useMediaQuery({ query: "(max-width: 959px)" });

  const [data, setData] = useState(uploadData);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
  };

  const handleAddTag = (id, label) => {
    console.log(id, label);
    setData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              selected_tags: [
                item.selected_tags.split(", ").filter((tag) => tag !== label),
                label,
              ].join(", "),
            }
          : item
      )
    );
  };
  const handleRemoveTag = (id, label) => {
    setData((prev) => {
      return prev.map((item) => ({
        ...item,
        selected_tags:
          item.id === id
            ? item.selected_tags
                .split(",")
                .filter((tag) => tag !== label)
                .join(",")
            : item.selected_tags,
      }));
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <div className="w-full">
      <Header title={"Upload CSV"} />
      <div className="w-full flex flex-1 justify-center items-center">
        <Card className="">
          <CardBody>
            <div
              data
              className={`border border-dashed px-5 sm:px-10 lg:px-40 ${
                isDragActive ? "border-[#605BFF]" : ""
              } rounded-lg h-64 flex flex-col justify-center`}
              {...getRootProps()}
            >
              <input {...getInputProps()} />

              <div className="flex flex-col justify-center items-center">
                <img src={ExcelIcon} alt="ms-excel-icon" />
                {file ? (
                  <div className="flex flex-col justify-center items-center">
                    <Typography className="text-[#999CA0] text-base my-4">
                      {file?.name ?? "file.xls"}
                    </Typography>
                    <Typography
                      onClick={(e) => removeFile(e)}
                      className=" text-[#D33030] cursor-pointer"
                    >
                      Remove
                    </Typography>
                  </div>
                ) : (
                  <p className="mt-4">
                    {isMobileTablet ? (
                      <>
                        Upload your excel sheet
                        <span className="text-[#605BFF] whitespace-pre">
                          {" "}
                          here
                        </span>
                      </>
                    ) : (
                      <>
                        Drop your excel sheet here or
                        <span className="text-[#605BFF] whitespace-pre">
                          {" "}
                          browse
                        </span>
                      </>
                    )}
                  </p>
                )}
              </div>
            </div>
          </CardBody>
          <CardFooter>
            <Button
              disabled={!file}
              className="flex flex-row items-center justify-center w-full"
            >
              <img src={UploadIcon} alt="upload-icon" />
              <Typography className="ml-2 text-sm">Upload</Typography>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="mx-20 my-28">
        <Typography className="text-black text-2xl font-semibold mb-11">
          Uploads
        </Typography>
        <UploadTable
          data={data}
          handleAddTag={handleAddTag}
          handleRemoveTag={handleRemoveTag}
        />
      </div>
    </div>
  );
};

export default Upload;
