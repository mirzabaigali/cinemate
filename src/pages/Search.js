import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../customHooks/useFetch";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No results found for '${queryTerm}'`
            : `Results for this '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => {
            return <Card movie={movie} key={movie.id} />;
          })}
        </div>
      </section>
    </main>
  );
};
