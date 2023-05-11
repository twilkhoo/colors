import { ReactNode } from "react";
import { motion } from "framer-motion";

type FadingTextProps = {
  delay: number;
  seconds: number;
  children: ReactNode;
};

// const FadingText = ({ delay, seconds, children }: FadingTextProps) => {
//   const timeLeft = delay - seconds;

//   return (
//     (timeLeft < 0) ? (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {children}
//       </motion.div>
//     ) : <Text></Text>
//   );
// };

const FadingText = ({ delay, seconds, children }: FadingTextProps) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0 }} // delay, 1
    >
      {children}
    </motion.div>
  );
};

export default FadingText;
