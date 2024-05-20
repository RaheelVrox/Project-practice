import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Markdown from "react-native-markdown-display";

const copy = `
#  Sample Dummy Markdown Content

## Introduction

This is a paragraph of text to serve as an introduction. Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

###  Heading

## Lists

### Unordered List

- Item 1
- Item 2
  - Subitem 1
  - Subitem 2
- Item 3

### Ordered List

1. First item
2. Second item
   1. Subitem 1
   2. Subitem 2
3. Third item

## Emphasis

*Italic text*
**Bold text**
***Bold and italic text***

## Links

[OpenAI](https://www.openai.com)

## Images

![Alt text](https://www.google.com/url?sa=i&url=https%3A%2F%2Fparepjeddah.org%2Fnational-flag%2F&psig=AOvVaw0o2skQ-PDNh3NCcilWlaaZ&ust=1716270039210000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjokZ7Cm4YDFQAAAAAdAAAAABAE)
`;

const EditorScreen = () => {
  const Markdownstylesheet = {
    heading1: {
      color: "#000000",
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 10,
      marginTop: 10,
    },
    heading2: {
      color: "#404040",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
      marginTop: 10,
    },
    body: {
      color: "black",
      fontSize: 16,
      lineHeight: 25,
    },
    link: {
      color: "#1e90ff",
      textDecorationLine: "underline",
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: "contain",
      marginVertical: 10,
    },
  };

  return (
    <View style={styles.mainscreen}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ height: "100%" }}
      >
        <Markdown style={Markdownstylesheet}>{copy}</Markdown>
      </ScrollView>
    </View>
  );
};

export default EditorScreen;

const styles = StyleSheet.create({
  mainscreen: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
