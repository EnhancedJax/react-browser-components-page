"use client";

import {
  ArcBrowser,
  ChromeBrowser,
} from "@enhanced-jax/react-browser-containers";
import { AnimatePresence, motion } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";
import React, { useState } from "react";

const browsers = [
  { Component: ChromeBrowser, name: "ChromeBrowser" },
  { Component: ArcBrowser, name: "ArcBrowser" },
];

export default function Home() {
  const [currentBrowser, setCurrentBrowser] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      "npm i @enhanced-jax/react-browser-containers"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nextBrowser = () => {
    setCurrentBrowser((prev) => (prev + 1) % browsers.length);
  };

  const prevBrowser = () => {
    setCurrentBrowser((prev) => (prev - 1 + browsers.length) % browsers.length);
  };

  const tabs = [
    {
      name: "Example",
      link: "https://example.com",
      content: <div className="p-4">Content goes here</div>,
      icon: <div className="w-full h-full bg-blue-500 rounded-full" />,
    },
  ];

  const implementationCode = `
import { ${browsers[currentBrowser].name} } from "@enhanced-jax/react-browser-containers";
import { useState } from "react";

const App = () => {
  const [tab, setTab] = useState(0);
  const tabs = [
    {
      name: "Example",
      link: "https://example.com",
      content: <div>Content</div>,
      icon: <div className="w-4 h-4 bg-blue-500 rounded-full" />,
    },
  ];

  return <${browsers[currentBrowser].name} tab={tab} setTab={setTab} tabs={tabs} />;
};
  `;

  return (
    <main className="min-h-screen px-4 py-12 text-black bg-gray-100 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center">
          react-browser-containers
        </h1>

        <div className="p-4 mb-8 bg-white rounded-lg shadow-md">
          <Highlight
            code="npm i @enhanced-jax/react-browser-containers"
            language="bash"
            theme={themes.nightOwl}
          >
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre className="p-2 rounded" style={style}>
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
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 mt-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevBrowser}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Previous
              </button>
              <button
                onClick={nextBrowser}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Next
              </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBrowser}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                {React.createElement(browsers[currentBrowser].Component, {
                  tabs,
                  tab: 0,
                  setTab: () => {},
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full md:w-1/2">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-bold">Implementation</h2>
              <Highlight
                code={implementationCode.trim()}
                language="jsx"
                theme={themes.nightOwl}
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <pre className="p-2 overflow-auto rounded" style={style}>
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
        </div>
      </div>
    </main>
  );
}
