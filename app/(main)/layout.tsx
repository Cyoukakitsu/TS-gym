import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">
        <span className="text-emerald-400 font-bold text-xl">TS GYM</span>

        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            今すぐ始める
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
}
