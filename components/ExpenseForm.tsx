import { FieldValues, useForm } from "react-hook-form";
import { schema, FormData } from "../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <option>Choose</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
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
