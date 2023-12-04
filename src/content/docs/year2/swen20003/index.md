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
  - ! it continues from where we left off in the scanner and DOES NOT start on the next line
  - ie. if `.nextDouble` then `.nextLine()` and you input `5\n6\n` - the double will be `5` and nextline will consume the `\n` immediately after `5`
- `boolean b = scanner.nextBoolean()` reads the next boolean
- `int i = scanner.nextInt()` reads the next int
- `double d = scanner.nextDouble()` reads the next double
- `String s2 = scanner.next()` reads the next word
- What is the pitfall of `.nextXXX()`?
  - Scanner does not automatically downcast (eg. float --> int)
- `scanner.hasNext()` returns true if there is any input to be read
- `scanner.hasNextXXX()` returns true if the next token matches XXX

### Files

- Using Scanner (and FileReader)

  - for small files
  - simple character reading

  ```java
  import java.io.FileReader;
  import java.util.Scanner;
  import java.io.IOException;

  public class ReadFile2 {
    public static void main(String[] args) {
      try (Scanner file = new Scanner(new FileReader("test.txt"))) {
        while (file.hasNextLine()) {
          System.out.println(file.nextLine());
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    }
  }
  ```

- Using BufferedReader (and FileReader)

  - for higher-level files
  - reads Strings, not just characters
  - DOES NOT compile without a `try...catch...` block

  ```java
  import java.io.FileReader;
  import java.io.BufferedReader;
  import java.io.IOException;

  public class ReadFile1 {
    public static void main(String[] args) {
      try (BufferedReader br = new BufferedReader(new FileReader("test.txt"))) {
        String text = null;

        while ((text = br.readLine()) != null) {
          System.out.println(text);
        }
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
  }
  ```

- Parsing CSVs
  - `String cells[] = text.split(",")` split the current line into its individual cells (do this in the `while` loop)

## Output

### Printing

- `System.out.print(object)` displays _object_
- `System.out.println(object)` displays _object_ followed by a newline
- `System.out.printf(<format string>, args, ...)` displaying a formatted string

### Format String

- `%flags width .precision conversion_character`
  - `flags`
    - default=right-justify
    - `-` left-justify
    - `+` output a plus(+) or minus(-) sign for a numerical value
    - `0` forces numerical values to be zero-padded
    - `,` comma grouping separator (for numbers > 1, 000)
    - ` ` (space) display a minus(-) sign if the number is negative or a space if it is positive
  - `width`
    - (opt.) width for outputting the argument and represents tha minimum number of characters to be written to the output
      - includes commas and decimal points in calculation
  - `.precision`
    - (opt.) number of digits of precision when outputting a floating-point value
    - or length of substring to extract from a String
  - `conversion_character`
    - `f` float
    - `s` string
    - `g` 'optimal' float
    - `d` integer
    - `c` Unicode character

### Writing Files

- using FileWriter

## Identifiers

> a name that uniquely identifies a program element such as a class, object, variable or method

- Identifier rules
  - must not start with a digit
  - all characters must be letters, digits or underscore(`_`) symbol
  - case-sensitive
  - cannot be reserved keywords (public, class, void, ...) or predefined identifiers (System, String, ...)
- Convention
  |Program Element|Identifier Convention|
  |--|--|
  |Variables, Methods, Objects| `camelCase`|
  |Classes|`PascalCase`|
  |Constant|`UPPERCASE_SNAKE`|

## Primitive Data Types and Wrapper Classes

- Type Casting
  ```java
  int x = 2.99;      // ❌
  int y = (int) 2.99; // ✅
  ```
  - the left can be assigned to anything on the right without type-casting:
    - byte -> short -> int -> long -> float -> double
    - char -> int
  - note: boolean and int cannot be assigned to each other

### Wrapper Classes

| Primitive Data Type          | Non-primitive Data Type (Wrapper)       |
| ---------------------------- | --------------------------------------- |
| starts with lowercase letter | starts with Uppercase letter            |
| only contains **data**       | can have **attributes** and **methods** |

| Primitive | Wrapper Class |
| --------- | ------------- |
| `boolean` | `Boolean`     |
| `byte`    | `Byte`        |
| `char`    | `Character`   |
| `int`     | `Integer`     |
| `float`   | `Float`       |
| `double`  | `Double`      |
| `long`    | `Long`        |
| `short`   | `Short`       |

- Boxing and Unboxing
  - Boxing: converting primitive to Wrapper
  - Unboxing: converting Wrapper to primitive
  ```java
  Integer x = Integer.parseInt(“20”);

  int y = x;        // unboxing (Integer -> int)
  Integer z = 2*x;  // Boxing (int -> Integer)
  ```

  ![](/src/assets/swen20003/boxing-unboxing.png)

## Arrays
TODO

- `static` = shared between all instances of a class
- Static methods
  - can only call other static methods
  - can only access static data
  - cannot refer to Java keywords (`this`, `super`, ...)

## Information Hiding
- ability to hide details of a class form the outside world
- Access Control: Preventing an outside class from **manipulating** the properties of another class in **undesired ways**

|Modifier|Class|Package|Subclass|Outside|
|--|--|--|--|--|
|`public`|✅|✅|✅|✅|
|`protected`|✅|✅|✅|❌|
|`default`|✅|✅|❌|❌|
|`private`|✅|❌|❌|❌|