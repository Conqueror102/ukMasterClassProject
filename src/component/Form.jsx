import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Swal from "sweetalert2";

// Yup validation schema
const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  number: Yup.string().required("Phone number is required"),
  countryOfOrigin: Yup.string().required("Country is required"),
  travellingTo: Yup.string().required("Destination is required"),
});

const Form = () => {
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFileChange = (event, label) => {
    const fileList = event.target.files;
    setFiles((prev) => ({
      ...prev,
      [label]: fileList ? Array.from(fileList) : [],
    }));
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    setLoading(true);

    // Text data
    for (const key in data) {
      formData.append(key, data[key]);
    }

    // Files
    if (files["Bsc Certificate"]?.[0]) formData.append("bscCertificate", files["Bsc Certificate"][0]);
    if (files["Transcript"]?.[0]) formData.append("transcript", files["Transcript"][0]);
    if (files["Wassce Certificate (Grade for English Language must be C6 or better)"]?.[0])
      formData.append("wassceCertificate", files["Wassce Certificate (Grade for English Language must be C6 or better)"][0]);
    if (files["Curriculum Vitae"]?.[0]) formData.append("cv", files["Curriculum Vitae"][0]);
    if (files["Personal Statement (one page)"]?.[0]) formData.append("personalStatement", files["Personal Statement (one page)"][0]);
    if (files["Biodata page of passport (must have at least 6 months validity)"]?.[0])
      formData.append("passportBiodata", files["Biodata page of passport (must have at least 6 months validity)"][0]);

    if (files["2 Reference Letters (one must be academic)"]?.[0])
      formData.append("referenceLetter1", files["2 Reference Letters (one must be academic)"][0]);
    if (files["2 Reference Letters (one must be academic)"]?.[1])
      formData.append("referenceLetter2", files["2 Reference Letters (one must be academic)"][1]);

    try {
      await axios.post("https://ukmasterclassbackend.onrender.com/api/users/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(false);

      Swal.fire({
        title: "Success!",
        text: "Form submitted successfully!",
        icon: "success",
        confirmButtonColor: "#16a571",
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Error!",
        text: "Failed to submit the form. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="flex w-full justify-between items-center">
      <div className="w-full bg-white p-10 flex-col min-h-[500px] flex justify-center border-gray-300 shadow-xl border rounded-xl max-sm:px-3 max-sm:py-6">
        <p className="text-2xl mb-8 font-semibold text-black">Fill in Details</p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-2 gap-x-5 max-sm:gap-y-5 gap-y-8 w-full mb-8 max-sm:grid-cols-none">
            {/* Text fields */}
            {[
              { name: "firstName", placeholder: "First Name" },
              { name: "lastName", placeholder: "Last Name" },
              { name: "email", placeholder: "Email", type: "email" },
              { name: "number", placeholder: "Number" },
            ].map(({ name, placeholder, type = "text" }, i) => (
              <div key={i}>
                <input
                  type={type}
                  placeholder={placeholder}
                  {...register(name)}
                  className="p-3 max-sm:p-2 border rounded-sm border-[#16a571] w-full"
                />
                {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
              </div>
            ))}

            {/* Select fields */}
            <div>
              <select
                {...register("countryOfOrigin")}
                className="p-3 max-sm:p-2 border rounded-sm border-[#16a571] w-full"
              >
                <option value="">Select Country</option>
                <option value="Nigeria">Nigeria</option>
              </select>
              {errors.countryOfOrigin && (
                <p className="text-red-500 text-sm">{errors.countryOfOrigin.message}</p>
              )}
            </div>

            <div>
              <select
                {...register("travellingTo")}
                className="p-3 border rounded-sm border-[#16a571] w-full"
              >
                <option value="">Traveling to</option>
                <option value="Nigeria">Nigeria</option>
              </select>
              {errors.travellingTo && (
                <p className="text-red-500 text-sm">{errors.travellingTo.message}</p>
              )}
            </div>
          </div>

          {/* File Uploads */}
          <div className="mt-6 space-y-6 grid grid-cols-2 space-x-2 max-sm:grid-cols-none">
            {[
              "Bsc Certificate",
              "Transcript",
              "Wassce Certificate (Grade for English Language must be C6 or better)",
              "Curriculum Vitae",
              "Personal Statement (one page)",
              "Biodata page of passport (must have at least 6 months validity)",
            ].map((label, i) => (
              <div key={i} className="block text-[14px]">
                <span className="text-gray-800 font-medium max-sm:text-[13px] max-sm:font-semibold">
                  {label}
                </span>
                <label className="mt-2 flex items-center justify-center w-9 h-9 max-sm:h-8 max-sm:w-8 border-1 border-dashed border-green-600 rounded-full cursor-pointer bg-green-50 hover:bg-green-100">
                  <span className="text-green-600 text-2xl max-sm:text-[15px] font-bold">+</span>
                  <input
                    type="file"
                    className="hidden"
                    data-label={label}
                    onChange={(e) => handleFileChange(e, label)}
                  />
                </label>
                {files[label] && (
                  <p className="text-sm text-gray-600 mt-2">
                    {files[label].map((f) => f.name).join(", ")}
                  </p>
                )}
              </div>
            ))}

            {/* Reference Letters */}
            <div className="block">
              <span className="text-gray-800 font-medium max-sm:text-[13px] max-sm:font-semibold text-[15px]">
                2 Reference Letters (one must be academic)
              </span>
              <label className="mt-2 flex items-center justify-center w-9 h-9 max-sm:h-8 max-sm:w-8 border-1 border-dashed border-green-600 rounded-full cursor-pointer bg-green-50 hover:bg-green-100">
                <span className="text-green-600 text-2xl font-bold max-sm:text-[14px]">+</span>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  data-label="2 Reference Letters (one must be academic)"
                  onChange={(e) =>
                    handleFileChange(e, "2 Reference Letters (one must be academic)")
                  }
                />
              </label>
              {files["2 Reference Letters (one must be academic)"]?.length > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  {files["2 Reference Letters (one must be academic)"].map((f) => f.name).join(", ")}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end max-sm:justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#16a571] text-white px-6 py-3 max-sm:w-full rounded-lg text-lg max-sm:text-[15px] max-sm:py-3 font-medium hover:bg-green-700 transition"
            >
              {loading && (
                <svg
                className="animate-spin h-5 w-5 mr-2 text-white inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              
              )}
              {loading ? "Loading....." :" Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
