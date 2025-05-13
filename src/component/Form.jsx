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
  const [uploadingToCloudinary, setUploadingToCloudinary] = useState({}); // Track Cloudinary uploads
  const [cloudinaryUrls, setCloudinaryUrls] = useState({}); // Store Cloudinary URLs
  const [registrationResult, setRegistrationResult] = useState(null); // To store backend response

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

  const uploadToCloudinary = async (file, label) => {
    setUploadingToCloudinary((prev) => ({ ...prev, [label]: true }));
    try {
      // **Important:** Replace with your actual backend URL if different
      const backendBaseURL = "https://ukmasterclassbackend.onrender.com";
      const signatureResponse = await axios.get(`${backendBaseURL}/api/cloudinary/signature`);
      const signatureData = signatureResponse.data;

      console.log("Upload Preset from Backend:", signatureData.upload_preset); // Check the preset

      const formData = new FormData();
      formData.append("file", file);
      formData.append("timestamp", signatureData.timestamp);
      formData.append("upload_preset", signatureData.upload_preset);
      formData.append("folder", signatureData.folder);
      formData.append("signature", signatureData.signature);
      formData.append("cloud_name", signatureData.cloud_name);
      formData.append("api_key", signatureData.api_key);

      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${signatureData.cloud_name}/raw/upload`,
        formData
      );

      setCloudinaryUrls((prev) => ({ ...prev, [label]: cloudinaryResponse.data.secure_url }));
      setUploadingToCloudinary((prev) => ({ ...prev, [label]: false }));
      return cloudinaryResponse.data.secure_url;
    } catch (error) {
      console.error(`Error uploading ${label} to Cloudinary:`, error);
      setUploadingToCloudinary((prev) => ({ ...prev, [label]: false }));
      Swal.fire({
        title: "Error!",
        text: `Failed to upload ${label}. Please try again.`,
        icon: "error",
        confirmButtonColor: "#d33",
      });
      return null;
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const uploadedUrls = {};

    // Upload files to Cloudinary
    const uploadPromises = Object.keys(files).map(async (label) => {
      if (files[label]?.[0]) {
        const url = await uploadToCloudinary(files[label][0], label);
        if (url) {
          uploadedUrls[label] = url;
        }
      } else if (files[label]?.length > 0) { // Handle multiple files (reference letters)
        const urls = await Promise.all(
          files[label].map((file) => uploadToCloudinary(file, label))
        );
        if (urls.every(url => url)) {
          uploadedUrls[label] = urls; // Store array of URLs for multiple files
        }
      }
    });

    await Promise.all(uploadPromises);

    try {
      const backendData = {
        ...data,
        documents: {
          bscCertificate: uploadedUrls["Bsc Certificate"],
          transcript: uploadedUrls["Transcript"],
          wassceCertificate: uploadedUrls["Wassce Certificate (Grade for English Language must be C6 or better)"],
          cv: uploadedUrls["Curriculum Vitae"],
          personalStatement: uploadedUrls["Personal Statement (one page)"],
          passportBiodata: uploadedUrls["Biodata page of passport (must have at least 6 months validity)"],
          referenceLetter1: uploadedUrls["2 Reference Letters (one must be academic)"]?.[0],
          referenceLetter2: uploadedUrls["2 Reference Letters (one must be academic)"]?.[1],
        },
      };

      const response = await axios.post("https://ukmasterclassbackend.onrender.com/api/users/register", backendData);

      console.log('Backend Registration Success Response:', response.data); // **CHECK THIS LOG**
      setRegistrationResult(response.data);
      setLoading(false);
      Swal.fire({
        title: "Success!",
        text: "Form submitted successfully!",
        icon: "success",
        confirmButtonColor: "#16a571",
      });
    } catch (error) {
      console.error("Error submitting form to backend:", error);
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
                {files[label]?.[0] && !uploadingToCloudinary[label] && (
                  <p className="text-sm text-gray-600 mt-2">
                    {files[label].map((f) => f.name).join(", ")}
                  </p>
                )}
                {uploadingToCloudinary[label] && (
                  <p className="text-sm text-blue-500 mt-2">Uploading {label}...</p>
                )}
                {cloudinaryUrls[label] && (
                  <p className="text-sm text-green-600 mt-2">
                    {label} uploaded: {cloudinaryUrls[label].substring(0, 20)}...
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
              {files["2 Reference Letters (one must be academic)"]?.length > 0 && !uploadingToCloudinary["2 Reference Letters (one must be academic)"] && (
                <p className="text-sm text-gray-600 mt-2">
                  {files["2 Reference Letters (one must be academic)"].map((f) => f.name).join(", ")}
                </p>
              )}
              {uploadingToCloudinary["2 Reference Letters (one must be academic)"] && (
                <p className="text-sm text-blue-500 mt-2">Uploading Reference Letters...</p>
              )}
              {cloudinaryUrls["2 Reference Letters (one must be academic)"]?.length > 0 && (
                <p className="text-sm text-green-600 mt-2">
                  Reference Letters uploaded:{" "}
                  {cloudinaryUrls["2 Reference Letters (one must be academic)"].map((url) => url.substring(0, 20) + "...").join(", ")}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end max-sm:justify-center">
            <button
              type="submit"
              disabled={loading || Object.values(uploadingToCloudinary).some(Boolean)}
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
              {loading ? "Loading....." : " Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
