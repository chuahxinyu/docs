---
title: "[SWEN20003] Object Oriented Software Development"
---

> https://docs.google.com/document/d/1YVQoiYOOQEAB69jvQW0s1YXphoewVeEc/edit?usp=sharing&ouid=108223066204340028861&rtpof=true&sd=true

## Hello World

```java
// HelloWorld.java

import java.lang.*; // (optional) imported by default

public class HelloWorld { // class definition (same as filename)
  public static void main (String args[]) {  // main method
    System.out.println("Hello, World!");
  }
}
```

- `String args[]` is the same as `String[] args`

## Compiling and Running

- `java <FileName>.java` : compiles _Filename.java_

## Input

### Command Line Arguments

- `java <Filename> <command line arguments>` : Entering Command Line Arguments and running _FileName.class_
- `args[0]` : Accessing the first command line argument
- Disadvantages of CLA
  - no interactivity
- When to use CLA
  - program configuration

### Scanner

```java
import java.util.Scanner;

// in main method
Scanner scanner = new Scanner(System.in); // create new instance of Scanner object

System.out.print("Enter an integer: ");
int n = scanner.nextInt();  // read an integer input
System.out.println("You entered " + n);

scanner.close();  // close scanner object
```

- `String s = scanner.nextLine()` reads a single line of text, up until a `return` or newline character
