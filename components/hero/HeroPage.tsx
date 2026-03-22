import Link from "next/link";
import { Badge } from "../ui/badge";

const HeroPage = () => {
  return (
    <main className="min-h-screen  flex flex-col">
      <section className="flex flex-col md:flex-row items-center gap-12 px-8 py-20 max-w-6xl mx-auto">
        <div className="flex-1">
          <Badge
            variant="outline"
            className="border-emerald-400 text-emerald-400 gap-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block"></span>
            THE TECHNICAL SANCTUARY
          </Badge>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            AnyScript から卒業：
            <br />
            <span className=" text-emerald-400"> 実務で使える</span>
            <br />
            <span className=" text-emerald-400">TypeScript</span>
            をマスタ
          </h1>
          <p>
            React/Next.js の実務シナリオで正確な型定義を練習。 AI
            が日本語でコードをレビューします。自立したプロフェッショナルへ。
          </p>

          <div className="flex items-center gap-4 mt-10">
            <Link
              href="/sign-in"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-2 rounded-lg text-lg transition-colors"
            >
              今すぐ始める
            </Link>

            <Link
              href="#"
              className="border border-zinc-700 hover:border-zinc-500 text-white px-4 py-2 rounded-lg text-lg transition-colors"
            >
              TS GYMについて
            </Link>
          </div>
        </div>
        {/* 右半边：代码展示 */}
        <div className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl p-6 font-mono text-sm">
          {/* 顶部圆点 + 文件名 */}
          <div className="flex items-center gap-1.5 mb-6">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="ml-2 text-zinc-500 text-xs">userApi.ts</span>
          </div>

          {/* Before */}
          <div className="mb-6 opacity-60">
            <p className="text-zinc-500 text-xs mb-2">{"// ❌ Before"}</p>
            <p>
              <span className="text-blue-400">const </span>
              <span className="text-white">getUser = </span>
              <span className="text-blue-400">async </span>
              <span className="text-white">{"(id: "}</span>
              <span className="text-red-400">any</span>
              <span className="text-white">{"): Promise<"}</span>
              <span className="text-red-400">any</span>
              <span className="text-white">{">"}</span>
            </p>
          </div>

          {/* After */}
          <div className="bg-zinc-800 rounded-lg p-4 border border-emerald-900">
            <p className="text-zinc-500 text-xs mb-2">
              {"// ✅ After: TS GYM"}
            </p>
            <p>
              <span className="text-blue-400">interface </span>
              <span className="text-emerald-400">User </span>
              <span className="text-white">{"{"}</span>
            </p>
            <p className="pl-4">
              <span className="text-white">id: </span>
              <span className="text-blue-300">string</span>
              <span className="text-white">;</span>
            </p>
            <p className="pl-4">
              <span className="text-white">role: </span>
              <span className="text-yellow-300">&apos;admin&apos;</span>
              <span className="text-white"> | </span>
              <span className="text-yellow-300">&apos;viewer&apos;</span>
              <span className="text-white">;</span>
            </p>
            <p className="text-white">{"}"}</p>
            <p className="mt-2">
              <span className="text-blue-400">const </span>
              <span className="text-white">getUser = </span>
              <span className="text-blue-400">async </span>
              <span className="text-white">{"(id: "}</span>
              <span className="text-blue-300">string</span>
              <span className="text-white">{"): Promise<"}</span>
              <span className="text-emerald-400">User</span>
              <span className="text-white">{">"}</span>
            </p>

            {/* AI Review badge */}
            <div className="mt-4 bg-zinc-900 rounded p-2 border border-zinc-700">
              <p className="text-emerald-400 text-xs font-sans">
                ✦ AI レビュー
              </p>
              <p className="text-zinc-400 text-xs font-sans mt-1">
                型安全になりました。<span className="text-red-400">any</span>{" "}
                を排除し、実務品質のコードです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-8 py-6 flex items-center justify-between text-sm text-zinc-500">
        <span className="text-emerald-400 font-bold">TS GYM</span>
        <div className="flex items-center gap-6">
          <span> Github</span>
        </div>
        <span>© 2025 TS GYM. The Technical Sanctuary.</span>
      </footer>
    </main>
  );
};

export default HeroPage;
