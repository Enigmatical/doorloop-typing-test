import React, { useState } from "react";

interface InputterProps {
  onType: (value: string) => void;
  onSubmit: (value: string) => void;
}

/**
 * An controlled input with additional functionality:
 *
 * * It only allows for character (matching /^\w$/) and <Backspace> keydowns to modify the value.
 * * It only allows for <Space> and <Enter> keydowns to submit the value.
 *
 * @param props.onType a callback fired when a keydown event changes the value
 * @param props.onSubmit a callback fired when either <Space> or <Enter> is pressed and a value exists
 * @returns
 */

const Inputter = ({ onType, onSubmit }: InputterProps) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!e.key.match(/^\w$/) && e.key !== "Backspace") {
      e.preventDefault();

      if (e.key === " " || e.key === "Enter") {
        setValue("");
        if (value) {
          onSubmit(value);
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const targetValue = target.value.toLocaleLowerCase();
    setValue(targetValue);
    onType(targetValue);
  };

  return (
    <input
      type="text"
      value={value}
      className="text-center bg-gray-200 border-b border-black px-3 py-2 text-2xl outline-none"
      onChange={(e: React.ChangeEvent) => handleChange(e)}
      onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e)}
      autoComplete="false"
      autoCapitalize="none"
      spellCheck="false"
      autoCorrect="false"
      placeholder="Start Typing"
    />
  );
};

export default Inputter;
