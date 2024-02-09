"use client";

import { Button, Input } from "@mui/material";
import React, { useCallback, useState } from "react";

export interface InputSearchStreamerProps {
  onSearch?: (searchText: string) => void;
}

const InputSearchStreamer = React.forwardRef<
  HTMLDivElement,
  InputSearchStreamerProps
>(function InputSearchStreamer(props, ref) {
  const { onSearch } = props;
  const [inputText, setInputText] = useState("");
  const search = useCallback(
    () => onSearch?.(inputText ?? ""),
    [onSearch, inputText],
  );
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;
      search();
    },
    [search],
  );

  return (
    <div className="w-full flex flex-row" ref={ref}>
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
});
export default InputSearchStreamer;
