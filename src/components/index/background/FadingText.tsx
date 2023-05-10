import { useState, useEffect, ReactNode } from "react";
import { Text, Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

type FadingTextProps = {
  delay: number,
  children: ReactNode
}

const FadingText = ({ delay, children }: FadingTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay, duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadingText;
