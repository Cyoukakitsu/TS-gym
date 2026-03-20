"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const CodeEditor = dynamic(() => import("@/components/editor/CodeEditor"), {
  ssr: false,
});

const PROBLEM = {
  title: "API レスポンスの型定義",
  description: `以下の JSON データを受け取る fetch 関数があります。
any を使わずに、正確な TypeScript の interface を定義してください。`,
  starterCode: `// TODO: any を使わずに UserResponse interface を定義してください

const fetchUser = async (id: string): Promise<any> => {
  const response = await fetch(\`/api/users/\${id}\`)
  return response.json()
}`,
};

export default function ProblemPage() {
  const [code, setCode] = useState(PROBLEM.starterCode);

  // 新增：储存 AI 回传的点评内容
  const [feedback, setFeedback] = useState<string | null>(null);

  // 新增：储存「正在等待 AI 回应」的状态
  const [isLoading, setIsLoading] = useState(false);

  // 新增：点击提交按钮时执行的函数
  const handleSubmit = async () => {
    // 防止重复点击：如果已经在 loading 就直接返回
    if (isLoading) return;

    setIsLoading(true);
    setFeedback(null); // 清掉上一次的点评

    try {
      // 把代码送到我们写的 API Route
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 告诉服务器我们送的是 JSON
        },
        body: JSON.stringify({ code }), // 把 code 转成 JSON 字串送出去
      });

      const data = await response.json();
      setFeedback(data.feedback); // 把 AI 点评存进 state
    } catch (error) {
      console.error(error);
      setFeedback("エラーが発生しました。もう一度お試しください。");
    } finally {
      // 无论成功或失败，最后都要把 loading 关掉
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      {/* 左半边：题目说明 */}
      <div className="w-95 shrink-0 border-r border-zinc-800 overflow-y-auto p-6">
        <p className="text-xs text-emerald-400 font-medium mb-2 uppercase tracking-wider">
          Module 01
        </p>
        <h1 className="text-xl font-bold mb-4">{PROBLEM.title}</h1>
        <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
          {PROBLEM.description}
        </p>

        {/* 提交按钮：根据 isLoading 状态显示不同文字 */}
        <button
          onClick={handleSubmit}
          disabled={isLoading} // loading 中禁止点击
          className="mt-8 w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-600 disabled:cursor-not-allowed text-black font-bold py-3 rounded-lg transition-colors"
        >
          {isLoading ? "レビュー中..." : "レビューして提出 →"}
        </button>

        {/* AI 点评结果：只有 feedback 有内容才显示 */}
        {feedback && (
          <div className="mt-6 p-4 bg-zinc-900 border border-zinc-700 rounded-lg">
            <p className="text-xs text-emerald-400 font-medium mb-2">
              AI メンターのフィードバック
            </p>
            {/* whitespace-pre-wrap 让换行符正常显示 */}
            <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap">
              {feedback}
            </p>
          </div>
        )}
      </div>

      {/* 右半边：编辑器区域 */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800 bg-zinc-900">
          <span className="text-xs text-emerald-400 bg-zinc-800 px-3 py-1 rounded">
            types.ts
          </span>
        </div>
        <div className="flex-1">
          <CodeEditor value={code} onChange={setCode} />
        </div>
      </div>
    </div>
  );
}
