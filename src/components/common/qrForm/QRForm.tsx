import { useForm } from "react-hook-form";
import "./QRFrom.css";

export interface FormField {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "textarea";
  required?: boolean;
}

interface Props {
  fields: FormField[];
  onSave: (values: Record<string, string>) => void;
}

export default function Form({ fields, onSave }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, string>>({
    mode: "onChange",
  });

  const onSubmit = (data: Record<string, string>) => {
    onSave(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div key={field.name} className="field">
          <label className="label">
            {field.label}
            {field.required && <span className="required"> *</span>}
          </label>

          {field.type === "textarea" ? (
            <textarea
              className="input textarea"
              placeholder={field.placeholder}
              {...register(field.name, {
                required: field.required ? `${field.label} is required` : false,
              })}
            />
          ) : (
            <input
              type="text"
              className="input"
              placeholder={field.placeholder}
              {...register(field.name, {
                required: field.required ? `${field.label} is required` : false,
              })}
            />
          )}

          {errors[field.name] && (
            <span className="error">{errors[field.name]?.message}</span>
          )}
        </div>
      ))}

      <button type="submit" className="saveButton">
        Save
      </button>
    </form>
  );
}
