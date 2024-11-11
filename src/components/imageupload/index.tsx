
import { useDropzone } from "react-dropzone";
import React, { useState } from "react";

const ImageUpload: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {

    const file = acceptedFiles[0];

    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  const { getRootProps, getInputProps } = useDropzone({
  
    onDrop, 
  });

  return (
    <div className="w-full max-w-md mx-auto mt-8">
        <div className="flex gap-8 justify-center mt-32">
      <div
        {...getRootProps()}
        className="border-2 p-8 text-center cursor-pointer w-[140px] h-[140px] bg-[#F3F3F3]"
      >
        <input {...getInputProps()} />
        <p>Загрузить фото</p>
      </div>
      <div
        {...getRootProps()}
        className="border-2 p-8 text-center cursor-pointer w-[140px] h-[140px] bg-[#F3F3F3]"
      >
        <input {...getInputProps()} />
        <p>Загрузить фото</p>
      </div>
      <div
        {...getRootProps()}
        className="border-2 p-8 text-center cursor-pointer w-[140px] h-[140px] bg-[#F3F3F3]"
      >
        <input {...getInputProps()} />
        <p>Загрузить фото</p>
      </div>
      <div
        {...getRootProps()}
        className="border-2 p-8 text-center cursor-pointer w-[140px] h-[140px] bg-[#F3F3F3]"
      >
        <input {...getInputProps()} />
        <p>Загрузить фото</p>
      </div>
      <div
        {...getRootProps()}
        className="border-2 p-8 text-center cursor-pointer w-[140px] h-[140px] bg-[#F3F3F3]"
      >
        <input {...getInputProps()} />
        <p>Загрузить фото</p>
      </div>
      <div
        {...getRootProps()}
        className="border-2 p-8 text-center cursor-pointer w-[140px] h-[140px] bg-[#F3F3F3]"
      >
        <input {...getInputProps()} />
        <p>Загрузить фото</p>
      </div>
      </div>
      {imagePreview && (
        <div className="mt-4">
          <h2>Preview:</h2>
          <img src={imagePreview} alt="Preview" className="w-48 h-48 object-cover" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
