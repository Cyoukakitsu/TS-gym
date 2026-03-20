"use client";

import Editor from "@monaco-editor/react";

// 定义这个组件接受哪些 props（属性）
// 这里就是我们练习 TypeScript 的地方
type CodeEditorProps = {
  value: string; // 编辑器里显示的初始代码
  onChange: (value: string) => void; // 当用户修改代码时，通知父组件
  language?: string; // 编程语言，问号代表「可选」，默认用 typescript
  height?: string; // 编辑器高度，可选
};

export default function CodeEditor({
  value,
  onChange,
  language = "typescript", // 没传的话默认是 typescript
  height = "100%",
}: CodeEditorProps) {
  return (
    <Editor
      height={height}
      language={language}
      value={value}
      theme="vs-dark" // 使用暗色主题，跟设计图一致
      onChange={(val) => onChange(val ?? "")} // val 可能是 undefined，所以用 ?? "" 保底
      options={{
        fontSize: 14,
        minimap: { enabled: false }, // 关掉右侧缩略图，画面更简洁
        scrollBeyondLastLine: false, // 不要在最后一行下面留空白
        tabSize: 2, // 缩进用 2 个空格
      }}
    />
  );
}
