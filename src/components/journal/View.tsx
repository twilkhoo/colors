import { Box, Button, Flex, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MonthView from "./MonthView";
const { getDaysInMonth, startOfMonth, format } = require("date-fns");
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import useAuth from "@/hooks/useAuth";
import { UserDoc } from "../withAuth";

type ViewProps = {
  userDocs: Map<string, UserDoc>;
  editPastDate: (newDateStr: string) => void;
};

const View = ({userDocs, editPastDate}: ViewProps) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [years, setYears] = useState<number[]>([]);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedMonth(e.target.value);
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedYear(e.target.value);

  // Using TypeScript's Map object
  const numToMonth: Map<number, string> = new Map<number, string>([
    [-1, "full year"],
    [0, "jan"],
    [1, "feb"],
    [2, "mar"],
    [3, "apr"],
    [4, "may"],
    [5, "jun"],
    [6, "jul"],
    [7, "aug"],
    [8, "sep"],
    [9, "oct"],
    [10, "nov"],
    [11, "dec"],
  ]);

  // Find the earliest year recorded.
  useEffect(() => {
    const existingYears: Set<number> = new Set();
    userDocs.forEach((_, id) => {
      existingYears.add(Number(id.substring(0, 4)));
    })
    const currentYear = new Date().getFullYear();
    existingYears.add(currentYear)
    const earliestYear: number = Math.min(...Array.from(existingYears));

    let yearsArray: number[] = [];
    for (let i = earliestYear; i <= currentYear; i++) {
      yearsArray.push(i);
    }
    console.log(yearsArray);
    setYears(yearsArray);
  }, [userDocs])

  return (
    <Box my="50px">
      <Text textStyle="homeText1">in the past</Text>

      <Flex
        mx={["10px", "20px", "50px", "100px", "100px", "200px"]}
        alignItems="center"
        justifyContent="center"
        textStyle="selectText"
      >
          <Select
            placeholder="Select year"
            w="250px"
            onChange={handleYearChange}
            value={selectedYear}
            m="10px"
          >
            {years.map((year) => (
              <option key={year} value={year} style={{ color: 'black' }}>
                {year}
              </option>
            ))}
          </Select>

          <Select
            placeholder="Select Month"
            w="250px"
            onChange={handleMonthChange}
            value={selectedMonth}
            m="10px"
          >
            {Array.from(numToMonth.keys()).map((idx) => (
              <option key={idx} value={idx} style={{ color: 'black' }}>
                {numToMonth.get(idx)}
              </option>
            ))}
          </Select>
      </Flex>
      <MonthView month={(selectedMonth)} year={(selectedYear)} userDocs={userDocs} editPastDate={editPastDate} />
    </Box>
  );
};
export default View;
