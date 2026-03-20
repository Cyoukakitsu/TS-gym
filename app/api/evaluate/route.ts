import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

// 初始化 Groq 客户端
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: "コードが見つかりません" },
        { status: 400 },
      );
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // Groq 最强的免费模型
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: buildPrompt(code),
        },
      ],
    });

    const feedback = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({ feedback });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 },
    );
  }
}

function buildPrompt(code: string): string {
  return `あなたはTypeScriptの専門家です。以下のコードをレビューしてください。

## レビューのルール
- 日本語で回答してください
- 直接答えを教えないでください
- どこが問題で、なぜ問題なのかを説明してください
- 改善のヒントだけを提供してください
- 厳しすぎず、励ましながらフィードバックしてください

## レビュー対象のコード
\`\`\`typescript
${code}
\`\`\`

## 回答フォーマット
**現状の問題点：**
（ここに問題点を書く）

**改善のヒント：**
（ここにヒントを書く）

**一言コメント：**
（励ましのコメント）`;
}
