import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { useForm, type SubmitHandler, Controller } from "react-hook-form";

import { RefundItem, type RefundItemsProps } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";

import Search from "../assets/search.svg";
import LeftArrow from "../assets/left.svg";
import RightArrow from "../assets/right.svg";

const bodySchema = z.object({
  query: z.string().min(3).max(255).optional(),
});

type inputSchema = z.infer<typeof bodySchema>;

const REFUND_ITEMS: RefundItemsProps[] = [
  {
    id: "1",
    title: "Refund Request #1234",
    subtitle: "Food expenses - Submitted on: 2024-06-15",
    value: "R$ 35,95",
    categoryImg: CATEGORIES["food"].icon,
  },
  {
    id: "2",
    title: "Refund Request #5678",
    subtitle: "Transport expenses - Submitted on: 2024-06-16",
    value: "R$ 29,95",
    categoryImg: CATEGORIES["transport"].icon,
  },
  {
    id: "3",
    title: "Refund Request #9101",
    subtitle: "Accommodation expenses - Submitted on: 2024-06-17",
    value: "R$ 552,95",
    categoryImg: CATEGORIES["accommodation"].icon,
  },
  {
    id: "3",
    title: "Refund Request #9101",
    subtitle: "Accommodation expenses - Submitted on: 2024-06-17",
    value: "R$ 552,95",
    categoryImg: CATEGORIES["accommodation"].icon,
  },
  {
    id: "3",
    title: "Refund Request #9101",
    subtitle: "Accommodation expenses - Submitted on: 2024-06-17",
    value: "R$ 552,95",
    categoryImg: CATEGORIES["accommodation"].icon,
  },
  {
    id: "3",
    title: "Refund Request #9101",
    subtitle: "Accommodation expenses - Submitted on: 2024-06-17",
    value: "R$ 552,95",
    categoryImg: CATEGORIES["accommodation"].icon,
  },
  {
    id: "3",
    title: "Refund Request #9101",
    subtitle: "Accommodation expenses - Submitted on: 2024-06-17",
    value: "R$ 552,95",
    categoryImg: CATEGORIES["accommodation"].icon,
  },
];

export function Dashboard() {
  const { handleSubmit, control } = useForm<inputSchema>({
    resolver: zodResolver(bodySchema),
  });

  const onSubmit: SubmitHandler<inputSchema> = (data) => console.log(data);

  return (
    <div className="bg-gray-500 md:min-w-3xl rounded-lg p-10">
      <h1 className="text-xl font-bold mb-6 text-gray-100">Requests</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-1 gap-3 pb-6 border-b border-gray-300 mb-6"
      >
        <Controller
          name="query"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Search requests..." />
          )}
        />
        <Button variant="icon" type="submit">
          <img src={Search} alt="Search" />
        </Button>
      </form>
      <div className="mb-8 max-h-96 overflow-y-auto">
        {REFUND_ITEMS.map((item) => (
          <RefundItem data={item} key={item.id} {...item} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button variant="icon">
          <img src={LeftArrow} alt="Previous" />
        </Button>
        <span className="text-gray-100">1 of 3 </span>
        <Button variant="icon">
          <img src={RightArrow} alt="Next" />
        </Button>
      </div>
    </div>
  );
}
