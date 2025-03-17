import type { ReactNode } from "react";

type ProgramData = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
}

function ProgramForm({ children, defaultValue, onSubmit }: ProgramFormProps) {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);

          const title = formData.get("title") as string;

          onSubmit({
            title,
            synopsis: "",
            poster: "",
            country: "",
            year: 0,
            category_id: 0,
          });
        }}
      >
        <input type="text" name="name" defaultValue={defaultValue.title} />
        <input type="text" name="name" defaultValue={defaultValue.synopsis} />
        <input type="text" name="name" defaultValue={defaultValue.poster} />
        <input type="text" name="name" defaultValue={defaultValue.country} />
        <input type="text" name="name" defaultValue={defaultValue.year} />
        <input
          type="text"
          name="name"
          defaultValue={defaultValue.category_id}
        />
        <button type="submit">{children}</button>
      </form>
    </>
  );
}

export default ProgramForm;
