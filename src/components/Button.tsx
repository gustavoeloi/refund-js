import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon" | "iconSmall";
};

const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12",
    iconSmall: "h-10 w-10",
  },
};

export function Button({
  children,
  type = "button",
  isLoading,
  variant = "base",
  className,
  ...rest
}: Props) {
  return (
    <button
      disabled={isLoading}
      type={type}
      className={classMerge([
        " bg-green-100 rounded-lg text-white font-bold text-md cursor-pointer hover:bg-green-200 transition ease-linear duration-200 disabled:cursor-progress flex items-center justify-center px-4",
        variants.button[variant],
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
