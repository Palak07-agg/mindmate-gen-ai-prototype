// src/pages/Chatbot.js
import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Input,
  Button,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋 I'm your MindMate! How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");

  // Predefined bot responses
  const botReplies = [
    "That sounds interesting. Tell me more 💭",
    "I’m here to listen 🤗",
    "It’s okay to feel that way ❤️",
    "Can you describe what made you feel this way?",
    "You are stronger than you think 🌟",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
      const botMessage = { sender: "bot", text: randomReply };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to bottom, #2a1177, #6d52f4, #DDC9FF, #b9deff)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={6}
    >
      <VStack
        spacing={4}
        p={6}
        bg={useColorModeValue("white", "gray.800")}
        borderRadius="2xl"
        boxShadow="xl"
        w="full"
        maxW="600px"
        h="80vh"
      >
        <Heading size="lg" color="purple.700">
          💬 MindMate Chatbot
        </Heading>

        {/* Chat Window */}
        <VStack
          spacing={3}
          w="full"
          flex="1"
          overflowY="auto"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="lg"
          p={4}
          bg={useColorModeValue("gray.50", "gray.700")}
        >
          {messages.map((msg, idx) => (
            <Box
              key={idx}
              alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"}
              bg={msg.sender === "user" ? "purple.400" : "pink.300"}
              color="white"
              px={4}
              py={2}
              borderRadius="lg"
              maxW="75%"
              boxShadow="md"
            >
              <Text>{msg.text}</Text>
            </Box>
          ))}
        </VStack>

        {/* Input Box */}
        <HStack w="full">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            bg="white"
          />
          <Button colorScheme="purple" onClick={handleSend}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
