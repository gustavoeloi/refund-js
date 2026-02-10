import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, type = "text", ...rest }: InputProps) {
  return (
    <fieldset className="text-gray-200 max-h-20 flex flex-1 flex-col focus-within:text-green-100">
      {legend && (
        <legend className="uppercase mb-2 text-inherit text-xs">
          {legend}
        </legend>
      )}
      <input
        type={type}
        {...rest}
        className="w-full h-12 px-4 text-sm rounded-lg bg-transparent border border-gray-300 focus:border-green-100 focus:border-2 outline-none"
        autoComplete="on"
      />
    </fieldset>
  );
}
