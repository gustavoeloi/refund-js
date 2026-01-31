type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({
  children,
  type = "button",
  isLoading,
  ...rest
}: Props) {
  return (
    <button
      disabled={isLoading}
      type={type}
      className="h-12 bg-green-100 rounded-lg text-white font-bold text-md cursor-pointer hover:bg-green-200 transition ease-linear duration-200 disabled:cursor-progress "
      {...rest}
    >
      {children}
    </button>
  );
}
