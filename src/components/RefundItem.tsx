import { formartCurrency } from "../utils/formartCurrency";

export type RefundItemsProps = {
  id: string;
  title: string;
  subtitle: string;
  value: number;
  categoryimg: string;
};

type Props = React.ComponentProps<"a"> & {
  data: RefundItemsProps;
};

export function RefundItem({ ...rest }: Props) {
  return (
    <a {...rest}>
      <div className="flex items-center justify-between  p-4 rounded-lg mb-4 hover:bg-gray-400 cursor-pointer ">
        <div className="flex items-center gap-4">
          <img
            src={rest.data.categoryimg}
            alt={rest.data.title}
            className="w-10 h-10"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {rest.data.title}
            </h2>
            <p className="text-sm text-gray-200">{rest.data.subtitle}</p>
          </div>
        </div>
        <span className="text-lg font-semibold text-gray-100 flex items-baseline gap-1">
          <small className="font-normal text-gray-200">R$</small>
          {formartCurrency(rest.data.value)}
        </span>
      </div>
    </a>
  );
}
