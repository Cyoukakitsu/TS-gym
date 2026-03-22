"use client";

import { useState } from "react";
// 请确保路径与你的项目匹配
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Difficulty = "全部" | "入門" | "実践" | "実務";
type TechStack = "全部" | "Pure TS" | "React" | "Next.js";

const DIFFICULTY_OPTIONS: Difficulty[] = ["全部", "入門", "実践", "実務"];
const TECHSTACK_OPTIONS: TechStack[] = ["全部", "Pure TS", "React", "Next.js"];

const FilterBar = () => {
  // 状态改为数组，初始值为包含 "全部" 的数组
  const [selectedDifficulties, setSelectedDifficulties] = useState<
    Difficulty[]
  >(["全部"]);
  const [selectedTechStacks, setSelectedTechStacks] = useState<TechStack[]>([
    "全部",
  ]);

  return (
    <div className="mb-8 flex flex-col gap-6">
      {/* 難易度 */}
      <section>
        <p className="text-teal-400 mb-3 text-sm font-medium">難易度</p>
        <ToggleGroup
          multiple={false}
          variant="outline"
          spacing={2}
          value={selectedDifficulties}
          onValueChange={(val) => setSelectedDifficulties(val as Difficulty[])}
          className="justify-start flex-wrap"
        >
          {DIFFICULTY_OPTIONS.map((difficulty) => (
            <ToggleGroupItem
              key={difficulty}
              value={difficulty}
              aria-label={`Select ${difficulty}`}
              className="rounded-full px-4 py-1 text-sm border border-zinc-700 text-zinc-400 bg-transparent hover:border-zinc-500 hover:text-zinc-300 data-[state=on]:bg-emerald-500 data-[state=on]:text-black data-[state=on]:border-emerald-500 transition-colors"
            >
              {difficulty}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </section>

      {/* 技術スタック */}
      <section>
        <p className="text-teal-400 mb-3 text-sm font-medium">技術スタック</p>
        <ToggleGroup
          multiple={false}
          variant="outline"
          spacing={2}
          value={selectedTechStacks}
          onValueChange={(val) => setSelectedTechStacks(val as TechStack[])}
          className="justify-start flex-wrap"
        >
          {TECHSTACK_OPTIONS.map((techstack) => (
            <ToggleGroupItem
              key={techstack}
              value={techstack}
              aria-label={`Select ${techstack}`}
              className="rounded-full px-4 py-1 text-sm border border-zinc-700 text-zinc-400 bg-transparent hover:border-zinc-500 hover:text-zinc-300 data-[state=on]:bg-emerald-500 data-[state=on]:text-black data-[state=on]:border-emerald-500 transition-colors"
            >
              {techstack}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </section>
    </div>
  );
};

export default FilterBar;
