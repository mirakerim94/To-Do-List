import { IconButton, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { SmallAddIcon } from "@chakra-ui/icons";

export const InputForm = ({ add }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => setInputValue(event.target.value);

  return (
    <Stack mt={10} direction="row" spacing={1}>
      <Input
        size="lg"
        placeholder="Write here your to-do"
        p={1}
        value={inputValue}
        onChange={handleChange}
      />
      <IconButton
        size="xl"
        p={2}
        px={3}
        bg="secondary.500"
        border="1px"
        icon={<SmallAddIcon />}
        onClick={() => (add(inputValue) ? setInputValue("") : null)}
      />
    </Stack>
  );
};


