import React from "react";
import UpdateTask from "./UpdateTask";
import { DeleteTask, DeleteAllTask } from "./DeleteTask";
import {
  HStack,
  Box,
  VStack,
  Flex,
  Text,
  StackDivider,
} from "@chakra-ui/react";



function TaskList({ tasks, updateTask, deleteTask, deleteTaskAll, checkTask }) {
  if (!tasks.length) {
    return (
      <>
        <Box maxW='80%'>
          
        </Box>
      </>
    );
  }
  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor='gray.100'
        borderWidth='2px'
        className="main-stack"
        p='5'
        borderRadius='lg'
        w='100%'
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "55vw" }}
        alignItems='stretch'
      >
        {tasks.map((task) => (
          <HStack key={task.id} opacity={task.check === true ? "0.2" : "1"}>
            <Text
              w='100%'
              p='8px'
              borderRadius='lg'
              as={task.check === true ? "s" : ""}
              cursor='pointer'
              onClick={() => checkTask(task.id)}
            >
              {task.body}
            </Text>
            <DeleteTask
              task={task}
              deleteTask={deleteTask}
              deleteTaskAll ={deleteTaskAll}
            />
            <UpdateTask task={task} updateTask={updateTask} />
          </HStack>
        ))}
      </VStack>

      <Flex>
        <DeleteAllTask deleteTaskAll={deleteTaskAll} />
      </Flex>
    </>
  );
}

export default TaskList;