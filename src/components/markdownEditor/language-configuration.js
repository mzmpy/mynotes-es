export default {
  comments: {
    blockComment: ["{/*", "*/}"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    {
			open: "{",
			close: "}"
		},
		{
			open: "[",
			close: "]"
		},
		{
			open: "(",
			close: ")"
		},
    {
      open: "\"",
      close: "\"",
      notIn: ["string"]
    },
    {
      open: "'",
      close: "'",
      notIn: ["string"]
    },
    // {
    //   open: "<",
    //   close: ">",
    //   notIn: ["string"]
    // },
    {
      open: "/*",
      close: "*/",
      notIn: ["string"]
    }
  ],
  surroundingPairs: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["\"", "\""],
    ["'", "'"],
    ["<", ">"],
    ["`", "`"],
    ["_", "_"],
    ["*", "*"]
  ],
  folding: {
    offSide: true,
    markers: {
      start: /^\s*\/\/\s*#?region\b/,
      end: /^\s*\/\/\s*#?endregion\b/
    }
  }
}
