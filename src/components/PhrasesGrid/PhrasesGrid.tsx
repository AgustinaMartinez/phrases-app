import { usePhrases } from "../../hooks/usePhrases";
import { Card } from "../Card/Card";

export const PhrasesGrid = () => {
  const { phrases, search } = usePhrases();

  const filteredPhrases = phrases
    .filter((phrase) =>
      phrase.text.toLowerCase().includes(search.toLowerCase())
    )
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-5">
      {filteredPhrases.map((phrase, index) => (
        <Card key={`phrase-${index}`} phrase={phrase} index={index} />
      ))}
    </div>
  );
};
