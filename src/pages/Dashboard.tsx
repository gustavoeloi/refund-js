import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { useForm, type SubmitHandler, Controller } from "react-hook-form";

import { RefundItem, type RefundItemsProps } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";

import Search from "../assets/search.svg";
import { Pagination } from "../components/Pagination";
import { useState } from "react";

const bodySchema = z.object({
  query: z.string().min(3).max(255).optional(),
});

type inputSchema = z.infer<typeof bodySchema>;

const REFUND_ITEMS: RefundItemsProps[] = [
  {
    id: "1",
    title: "Refund Request #1234",
    subtitle: "Food expenses - Submitted on: 2024-06-15",
    value: 35.95,
    categoryimg: CATEGORIES["food"].icon,
  },
  {
    id: "2",
    title: "Refund Request #5678",
    subtitle: "Transport expenses - Submitted on: 2024-06-16",
    value: 29.95,
    categoryimg: CATEGORIES["transport"].icon,
  },
  {
    id: "3",
    title: "Refund Request #9101",
    subtitle: "Accommodation expenses - Submitted on: 2024-06-17",
    value: 552.95,
    categoryimg: CATEGORIES["accommodation"].icon,
  },
  {
    id: "4",
    title: "Refund Request #9101",
    subtitle: "Accommodation expenses - Submitted on: 2024-06-17",
    value: 552.95,
    categoryimg: CATEGORIES["accommodation"].icon,
  },
  {
    id: "5",
    title: "Refund Request #9101",
    subtitle: "Accommodation expenses - Submitted on: 2024-06-17",
    value: 356.2,
    categoryimg: CATEGORIES["accommodation"].icon,
  },
  {
    id: "6",
    title: "Refund Request #9101",
    subtitle: "Accommodation expenses - Submitted on: 2024-06-17",
    value: 552.95,
    categoryimg: CATEGORIES["accommodation"].icon,
  },
  {
    id: "7",
    title: "Refund Request #9101",
    subtitle: "Accommodation expenses - Submitted on: 2024-06-17",
    value: 552.95,
    categoryimg: CATEGORIES["accommodation"].icon,
  },
];

export function Dashboard() {
  const { handleSubmit, control } = useForm<inputSchema>({
    resolver: zodResolver(bodySchema),
  });

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);

  const onSubmit: SubmitHandler<inputSchema> = (data) => console.log(data);

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalPage) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
  }

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
          <RefundItem
            data={item}
            key={item.id}
            {...item}
            href={`/refund/${item.id}`}
          />
        ))}
      </div>

      <Pagination
        current={page}
        total={totalPage}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </div>
  );
}
