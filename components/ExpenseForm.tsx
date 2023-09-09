import categories from "./categories";
import { useForm } from "react-hook-form";
import { schema, ExpenseFormData } from "../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

export default function ExpenseForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      {/* Description */}
      <div className="form-group mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          className="form-control mb-1"
          type="text"
        />
        {errors.description && (
          <span className="text-danger">{errors.description.message}</span>
        )}
      </div>

      {/* Amount */}
      <div className="form-group mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          className="form-control mb-1"
          type="number"
        />
        {errors.amount && (
          <span className="text-danger">{errors.amount.message}</span>
        )}
      </div>

      {/* Select category */}
      <div className="form-group mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          className="form-select mb-1"
          id="category"
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className="text-danger">{errors.category.message}</span>
        )}
      </div>

      {/* Submit button */}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
