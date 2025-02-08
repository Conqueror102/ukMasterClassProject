import React from "react";
import { useState } from "react";

const Form = () => {
  const [files, setFiles] = useState({});

  const handleFileChange = (event, label) => {
    const fileList = event.target.files;
    setFiles((prev) => ({
      ...prev,
      [label]: fileList ? Array.from(fileList).map((file) => file.name) : [],
    }));
  };

  return (
    <>
      <div className="flex w-full justify-between items-center">
        <div className="w-full bg-white p-10 flex-col min-h-[500px] flex justify-center border-gray-300 shadow-xl border rounded-xl max-sm:px-3 max-sm:py-6">
          <div>
            {" "}
            <p className="text-2xl mb-8 font-semibold text-black">
              Fill in Details
            </p>
          </div>

          <form action="" className="w-full ">
            <div className=" grid grid-cols-2 gap-x-5 max-sm:gap-y-5 gap-y-8 w-full mb-8 max-sm:grid-cols-none">
              <input
                type="text"
                placeholder="firstName"
                className="p-3 max-sm:p-2 border rounded-sm border-[#16a571]"
              />
              <input
                type="text"
                placeholder="lastName"
                className="p-3 max-sm:p-2 border rounded-sm border-[#16a571]"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 max-sm:p-2 border rounded-sm border-[#16a571]"
              />
              <input
                type="text"
                placeholder="Number"
                className="p-3 max-sm:p-2 border rounded-sm border-[#16a571]"
              />

              <select
                name="country"
                id=""
                className="p-3 max-sm:p-2 border rounded-sm border-[#16a571]"
              >
                <option value="">country</option>
                <option value="">Nigeria</option>
                <option value="">Nigeria</option>
                <option value="">Nigeria</option>
                <option value="">Nigeria</option>
              </select>
              <select
                name="country"
                id=""
                className="p-3 border rounded-sm border-[#16a571]"
              >
                <option value="">travling to</option>
                <option value="">Nigeria</option>
                <option value="">Nigeria</option>
                <option value="">Nigeria</option>
                <option value="">Nigeria</option>
              </select>
            </div>

            {/* doc side */}

            <div className="mt-6 space-y-6 grid grid-cols-2 space-x-2 max-sm:grid-cols-none ">
              {[
                "Bsc Certificate",
                "Transcript",
                "Wassce Certificate (Grade for English Language must be C6 or better)",
                "Curriculum Vitae",
                "Personal Statement (one page)",
                "Biodata page of passport (must have at least 6 months validity)",
              ].map((label, index) => (
                <div key={index} className="block text-[14px] ">
                  <span className="text-gray-800 font-medium max-sm:text-[13px] max-sm:font-semibold">
                    {label}
                  </span>
                  <label className="mt-2  flex items-center justify-center w-9 h-9 max-sm:h-8 max-sm:w-8 border-1 border-dashed border-green-600 rounded-full cursor-pointer bg-green-50 hover:bg-green-100">
                    <span className="text-green-600 text-2xl max-sm:text-[15px]  font-bold">
                      +
                    </span>
                    <input
                      type="file"
                      className="hidden "
                      onChange={(e) => handleFileChange(e, label)}
                    />
                  </label>
                  {files[label] && (
                    <p className="text-sm text-gray-600 mt-2">{files[label]}</p>
                  )}
                </div>
              ))}

              {/* Input for multiple file upload */}
              <div className="block">
                <span className="text-gray-800 font-medium max-sm:text-[13px] max-sm:font-semibold text-[15px]">
                  2 Reference Letters (one must be academic)
                </span>
                <label className="mt-2 flex  items-center  justify-center w-9 h-9 max-sm:h-8 max-sm:w-8 border-1 border-dashed border-green-600 rounded-full cursor-pointer bg-green-50 hover:bg-green-100">
                  <span className="text-green-600 text-2xl font-bold max-sm:text-[14px]">
                    +
                  </span>
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) =>
                      handleFileChange(
                        e,
                        "2 Reference Letters (one must be academic)"
                      )
                    }
                  />
                </label>
                {files["2 Reference Letters (one must be academic)"] &&
                  files["2 Reference Letters (one must be academic)"].length >
                    0 && (
                    <p className="text-sm text-gray-600 mt-2">
                      {files["2 Reference Letters (one must be academic)"].join(
                        ", "
                      )}
                    </p>
                  )}
              </div>
            </div>

            <div className="mt-6 flex justify-end  max-sm:justify-center ">
              <button className="bg-[#16a571] text-white px-6 py-3 max-sm:w-full rounded-lg text-lg max-sm:text-[15px] max-sm:py-3 font-medium hover:bg-green-700 transition">
                Submit 
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
