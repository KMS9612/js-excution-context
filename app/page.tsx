"use client";
import { Box, Typography } from "@mui/material";
import Editor from "@monaco-editor/react";
import * as parser from "@babel/parser";

export default function Home() {
  const onChangeEditorValue = (value: string | undefined) => {
    if (value !== undefined) {
      // Babel parser를 사용하여 AST 생성
      const ast = parser.parse(value, {
        // 파싱할 때 사용할 옵션들
        sourceType: "module", // "script" 또는 "module" 중 선택
        plugins: [
          // 사용 중인 JavaScript 언어 기능 또는 실험적 기능에 맞는 플러그인을 추가
          "jsx", // JSX 문법 사용 시
          "typescript", // TypeScript 사용 시
        ],
      });

      console.log(ast);
    }
  };

  return (
    <Box>
      <Typography variant="h2" color={"#fff"}>
        JavaScript Excution Context
      </Typography>
      <Box
        style={{
          width: "100%",
          display: "flex",
          padding: "0 15px",
          gap: "10px",
        }}
      >
        {/* Editor */}
        <Box
          style={{
            width: "50%",
            height: "70vh",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <Editor
            width={"100%"}
            height="100%"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            theme="vs-dark"
            onChange={onChangeEditorValue}
          ></Editor>
        </Box>
        {/* Result */}
        <Box style={{ width: "50%", border: "1px solid #fff" }}>
          Result Here
        </Box>
      </Box>
    </Box>
  );
}
