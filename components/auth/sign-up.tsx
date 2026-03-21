"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SocialButtons } from "./social-button";

export function SignUpForm() {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader className="text-center">
        <span className="text-emerald-400 font-bold text-2xl">TS GYM</span>
        <CardTitle className="text-white text-2xl">アカウントを作成</CardTitle>
        <CardDescription className="text-zinc-400">
          型安全な開発者のエリート集団に加わりましょう。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label className="text-zinc-300">メールアドレス</Label>
            <Input
              type="email"
              placeholder="dev@tsgym.com"
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-zinc-300">パスワード</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold">
            アカウントを作成する
          </Button>

          <SocialButtons />
          <p className="text-center text-zinc-500 text-sm">
            既にアカウントをお持ちですか？{" "}
            <Link href="/sign-in" className="text-emerald-400 hover:underline">
              ログイン
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
