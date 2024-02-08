import { Button, Input } from "@mui/material";
import React, { useCallback, useState } from "react";

export interface InputSearchStreamerProps {
  onSearch?: (searchText: string) => void;
}

export default function InputSearchStreamer(props: InputSearchStreamerProps) {
  const { onSearch } = props;
  const [inputText, setInputText] = useState("");
  const search = useCallback(() => onSearch?.(inputText ?? ""), [inputText]);
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;
      search();
    },
    [search],
  );

  return (
    <div className="w-full flex flex-row">
      <Input
        className="flex-1"
        value={inputText}
        onKeyUp={handleKeyPress}
        placeholder="닉네임 또는 아이디를 입력하세요."
        onChange={({ target: { value } }) => setInputText(value)}
      />
      <Button onClick={search}>검색</Button>
    </div>
  );
}
