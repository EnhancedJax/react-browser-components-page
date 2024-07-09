"use client";

import { codeTheme, darkCodeTheme } from "@/providers/constants.js";
import { useAppContext } from "@/providers/provider";
import { Highlight, themes } from "prism-react-renderer";
import CopyButton from "./CopyButton";

export default function InstallationCode() {
  const { darkTheme } = useAppContext();

  return (
    <div className="flex justify-center gap-2 p-4 mb-8 bg-white rounded-lg shadow-md xl:flex-col dark:bg-gray-800">
      <Highlight
        code="npm i react-browser-components"
        language="bash"
        theme={darkTheme ? themes[darkCodeTheme] : themes[codeTheme]}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className="w-full p-2 overflow-auto rounded-md" style={style}>
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
      <CopyButton />
    </div>
  );
}
