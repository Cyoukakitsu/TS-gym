import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type ProblemStatus = "未着手" | "進行中" | "合格";
type ProblemDifficulty = "簡単" | "実践" | "実務";
type ProblemTechStack = "TypeScript" | "React";

type Problem = {
  id: string;
  title: string;
  status: ProblemStatus;
  difficulty: ProblemDifficulty;
  techStack: ProblemTechStack;
};
function StatusBadge({ status }: { status: Problem["status"] }) {
  const styles = {
    未着手: "bg-zinc-700 text-zinc-300",
    進行中: "bg-blue-900 text-blue-300",
    合格: "bg-emerald-900 text-emerald-300",
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}

export default function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex items-center justify-between">
      {/* 左側：情報 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <StatusBadge status={problem.status} />
        </div>
        <h3 className="text-white font-semibold text-lg">{problem.title}</h3>
        <div className="flex gap-2">
          <Badge
            variant="outline"
            className="text-zinc-400 border-zinc-700 text-xs"
          >
            {problem.difficulty}
          </Badge>
          <Badge
            variant="outline"
            className="text-zinc-400 border-zinc-700 text-xs"
          >
            {problem.techStack}
          </Badge>
        </div>
      </div>

      {/* 右側：ボタン */}
      <Button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold shrink-0">
        <Link href={`/problems/${problem.id}`}>練習を始める</Link>
      </Button>
    </div>
  );
}
