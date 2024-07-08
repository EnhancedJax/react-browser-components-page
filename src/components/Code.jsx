"use client";

import { codeTheme, darkCodeTheme } from "@/providers/constants.js";
import { useAppContext } from "@/providers/provider";
import { Highlight, themes } from "prism-react-renderer";

export default function Code() {
  const { browsers, index, darkTheme } = useAppContext();

  return (
    <div className="flex flex-col flex-grow w-full p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:hidden">
      <h2 className="mb-4 text-2xl font-bold">
        {browsers[index][darkTheme ? "dark" : "light"]?.title ||
          browsers[index].title}
      </h2>
      <div className="relative flex-grow text-sm">
        <Highlight
          code={
            browsers[index][darkTheme ? "dark" : "light"]?.code ||
            browsers[index].code
          }
          language="jsx"
          theme={darkTheme ? themes[darkCodeTheme] : themes[codeTheme]}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className="absolute top-0 left-0 w-full h-full overflow-auto rounded-md"
              style={{ ...style }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
