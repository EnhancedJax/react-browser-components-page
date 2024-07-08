"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      "npm i @enhanced-jax/react-browser-containers"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      className="px-4 py-2 text-white transition-colors bg-blue-500 rounded "
      whileHover={{ scale: 1.1, translateY: -4 }}
    >
      {copied ? "Copied!" : "Copy"}
    </motion.button>
  );
}
