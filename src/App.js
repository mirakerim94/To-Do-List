import React from 'react';
import { Flex, Stack, useToast, Center } from '@chakra-ui/react';
import  {Header}  from "./components/Header";
import {Todos} from "./components/Todos";
import {InputForm} from "./components/InputForm";
import useLocalStorage from "./components/useLocalStorage";


function App() {
  const [listValue, setListValue] = useLocalStorage("list", []) 

  const toast = useToast();
  const handleToast = (text, status) => toast({
    title: text,
    status: status,
    isClosable: true,
  })

  const checkItem = (item) => {
    
    if (item === "") {
      handleToast("Input is empty. Please write something", "error");
      return false
    }
    if (listValue.filter(elem => elem.text === item).length > 0) {
      handleToast(`${item} already exists`, "error");
      return false
    }
    return true;
  }
  const addToList = (item) => {
    if (checkItem(item)) {
      setListValue(listValue => listValue.concat(
        {
          text: item,
          id: String(Date.now())
        }
      ));
      return true
    }
  }

  const deleteFromList = (index) => {
    setListValue(listValue =>
      listValue.filter(value => value.text !== index))
  }
  const handleEdit = (edited) => {
    if (checkItem(edited.text)) {
      setListValue(listValue =>
        listValue.map(elem => elem.id === edited.id ? edited : elem));
      handleToast("Item edited successfully", "success")
      return true
    }
  }
  
  return (
    <>
    <Center><Header /></Center>
  
    <Stack direction="column" minHeight="100vh" bg="white" spacing={15}>
      <Flex alignSelf="center"
        bg="primary.50"
        boxShadow="lg"
        align="center"
        justify="space-around"
        direction="column"
        borderRadius={10}
        minWidth={["sm", "sm", "md", "lg"]}
      >
        <InputForm add={addToList} />
        <Todos data={listValue} deleteTodo={deleteFromList} editTodo={handleEdit} />
      </Flex>

    </Stack></>)
}

export default App
