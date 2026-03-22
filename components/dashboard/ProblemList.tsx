import ProblemCard from "./ProblemCard";

const ProblemList = () => {
  return (
    <ProblemCard
      problem={{
        id: "1",
        title: "問題1",
        status: "未着手",
        difficulty: "簡単",
        techStack: "TypeScript",
      }}
    />
  );
};

export default ProblemList;
