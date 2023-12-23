import { Box, Flex, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import MonthView from "./MonthView";
const { getDaysInMonth, startOfMonth, format } = require("date-fns");

const View = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedMonth(e.target.value);
  const [selectedYear, setSelectedYear] = useState("");
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedYear(e.target.value);

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
            <option value="2023" style={{ color: "black" }}>
              2023
            </option>
            <option value="2022" style={{ color: "black" }}>
              2022
            </option>
            <option value="2021" style={{ color: "black" }}>
              2021
            </option>
            <option value="2020" style={{ color: "black" }}>
              2020
            </option>
          </Select>

          <Select
            placeholder="Select Month"
            w="250px"
            onChange={handleMonthChange}
            value={selectedMonth}
            m="10px"
          >
            <option value="-1" style={{ color: "black" }}>
              full year
            </option>
            <option value="0" style={{ color: "black" }}>
              jan
            </option>
            <option value="1" style={{ color: "black" }}>
              feb
            </option>
            <option value="2" style={{ color: "black" }}>
              mar
            </option>
            <option value="3" style={{ color: "black" }}>
              apr
            </option>
            <option value="4" style={{ color: "black" }}>
              may
            </option>
            <option value="5" style={{ color: "black" }}>
              jun
            </option>
            <option value="6" style={{ color: "black" }}>
              jul
            </option>
            <option value="7" style={{ color: "black" }}>
              aug
            </option>
            <option value="8" style={{ color: "black" }}>
              sep
            </option>
            <option value="9" style={{ color: "black" }}>
              oct
            </option>
            <option value="10" style={{ color: "black" }}>
              nov
            </option>
            <option value="11" style={{ color: "black" }}>
              dec
            </option>
          </Select>


      </Flex>


      <MonthView month={(selectedMonth)} year={(selectedYear)}/>


    </Box>
  );
};
export default View;
