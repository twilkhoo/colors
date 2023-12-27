import { Box, Flex, Select, Text, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { UserDoc } from "../withAuth";
import { convertDateStrToNormalDate, convertIndexToDateStr, convertIndexToDateObj } from "./dateFuncs";
const { getDaysInMonth, getDaysInYear, startOfMonth, getDay, format } = require("date-fns");

type MonthViewProps = {
  month: string;
  year: string;
  userDocs: Map<string, UserDoc>;
  editPastDate: (newDateStr: string) => void;
};


const MonthView = ({ month, year, userDocs, editPastDate }: MonthViewProps) => {
  const daysToPrint = (month === "-1" ? getDaysInYear(new Date(Number(year), Number(month))) : getDaysInMonth(new Date(Number(year), Number(month))));
  const firstWeekday = (month === "-1" ? getDay(startOfMonth(new Date(Number(year), 0))) : getDay(startOfMonth(new Date(Number(year), Number(month)))));
  const baseArr = Array.from(Array(daysToPrint).keys());

  // Responsiveness stuff.
  const [isLargerThan2Xl] = useMediaQuery('(min-width: 1536px)');
  const [isLargerThanXl] = useMediaQuery('(min-width: 1280px)');
  const [isLargerThanLg] = useMediaQuery('(min-width: 992px)');
  const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');
  let factor: number;
  if (isLargerThan2Xl) factor = 80;
  else if (isLargerThanXl) factor = 70;
  else if (isLargerThanLg) factor = 60;
  else if (isLargerThanMd) factor = 50;
  else factor = 40;
  if (month === "-1") { // Want to display full year.
    factor /= 1.5;
  }

  const moodColor = (index: number): string => {
    const today = new Date();
    const dateExists: boolean = (userDocs.get(convertIndexToDateStr(Number(year), Number(month), index))?.mood) ? true : false;

    if (dateExists) {
      return `moods.${userDocs.get(convertIndexToDateStr(Number(year), Number(month), index))?.mood! * 100}`
    } else if (convertIndexToDateObj(Number(year), Number(month), index).getTime() < today.getTime()) {
      return "transparent";
    } else {
      return "moods.700"
    }
  }

  const handleBoxClick = (index: number) => {
    if (moodColor(index) !== "moods.700") { 
      editPastDate(convertIndexToDateStr(Number(year), Number(month), index));
    }
  }
  

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      my="100px"
    >
        <Box 
          w={factor*7+"px"} 
          h={ factor*(month === "-1" ? 53 : 6) +"px"}
          position="relative">

          <Flex
            justifyContent="center"
            alignItems="center"
            w={factor*7+"px"}
            h={factor*(month === "-1" ? 53 : 6) +"px"}
          >
            { (month === "" || year === "") ? (
              <Flex w={factor*7+"px"} h={factor*7+"px"} borderWidth="2px" borderRadius="20px" borderColor="#ffffff88" justifyContent="center" alignItems="center">
                <Text textStyle="emptyText">select a month and year</Text>
              </Flex>
            ) : (
              baseArr.map((index) => (
                <Tooltip label={convertDateStrToNormalDate(convertIndexToDateStr(Number(year), Number(month), index))}>
                  <Box
                    position="absolute"
                    w={factor+"px"}
                    h={factor+"px"}
                    top={Math.floor((index + firstWeekday) / 7) * (factor) + "px"}
                    left={((index + firstWeekday) % 7) * (factor) + "px"}
                    borderWidth="2px"
                    borderColor="white"
                    borderRadius="10px"
                    key={`MonthView${index}`}
                    backgroundColor={moodColor(index)}
                    onClick={() => handleBoxClick(index)}
                    style={{ cursor: `${moodColor(index) === "moods.700" ? "not-allowed" : "pointer"}` }} // Default cursor style
                  />
                </Tooltip>
              ))
          )}
          </Flex>
        </Box>

    </Flex>
  );
};

export default MonthView;
