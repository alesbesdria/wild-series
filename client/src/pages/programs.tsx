import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const response = await fetch("http://localhost:3310/api/programs");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des programmes");
        }
        const data = await response.json();
        setPrograms(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrograms();
  }, []);

  return (
    <div>
      <h1>Series</h1>
      {loading && <p> Loading Series ...!</p>}
      {programs.length > 0 ? (
        <div>
          {programs.map((program) => (
            <div key={program.id}>
              <h2>
                {program.title} <span>{program.year}</span>
              </h2>
              <p>{program.synopsis}</p>
              <p>Country: {program.country}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>There is no program available</p>
      )}
    </div>
  );
}
