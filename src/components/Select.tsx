import type { ComponentProps } from "react";

type selectProps = ComponentProps<"select"> & {
  legend?: string;
};

export function Select({ legend, children, ...rest }: selectProps) {
  return (
    <fieldset className="text-gray-200 max-h-20 flex flex-1 flex-col focus-within:text-green-100">
      {legend && (
        <legend className="uppercase mb-2 text-inherit text-xs">
          {legend}
        </legend>
      )}
      <select
        {...rest}
        className="w-full h-12 px-4 text-sm rounded-lg bg-transparent border border-gray-300 focus:border-green-100 focus:border-2 outline-none"
      >
        <option value="" disabled hidden>
          Select
        </option>
        {children}
      </select>
    </fieldset>
  );
}
