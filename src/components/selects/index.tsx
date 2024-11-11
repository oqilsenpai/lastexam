import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface SelectFieldProps {
  id: string;
  label: string;
  options: string[];
  required?: boolean;
  defaultValue?: string;
}

const SelectField: FC<SelectFieldProps> = ({
  id,
  label,
  options,
  required = false,
  defaultValue = "",
}) => {
  const { control } = useFormContext(); 

  return (
    <div className="mb-2 ">
      <label htmlFor={id} className="block mb-2 text-sm  font-medium text-gray-300">
        {label}
      </label>
      <Controller
        name={id}
        control={control}
        defaultValue={defaultValue}
        rules={{ required: required ? `${label} is required` : false }}
        render={({ field, fieldState }) => (
          <>
            <select
              id={id}
              {...field}
              className="bg-gray-200 border-none text-sm rounded-lg   block w-[330px] h-[45px] p-2.5"
            >
              <option value="" disabled>
                {`Choose a ${label.toLowerCase()}`}
              </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {fieldState?.error && (
              <p className="text-red-500 text-sm">{fieldState?.error?.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default SelectField;
