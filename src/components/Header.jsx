import { Heading, Box } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box
      width="40%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Heading>To Do List</Heading>
    </Box>
  );
};
