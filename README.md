# Typescript_Practice
# TypeScript Installation Guide

Follow these steps to install and run TypeScript on your system.

## 1. Install Node.js

TypeScript requires Node.js.
Download and install Node.js from the official website:

https://nodejs.org

After installation, verify it using:

```bash
node -v
npm -v
```

---

## 2. Install TypeScript Globally

Run the following command in the terminal:

```bash
npm install -g typescript
```

---

## 3. Verify TypeScript Installation

Check if TypeScript is installed successfully:

```bash
tsc -v
```

This will display the installed TypeScript version.

---

## 4. Create a TypeScript File

Create a file with the `.ts` extension.

Example:

```bash
variable.ts
```

Example code:

```ts
let message: string = "Hello TypeScript";
console.log(message);
```

---

## 5. Compile TypeScript to JavaScript

Use the TypeScript compiler:

```bash
tsc variable.ts
```

This will generate a JavaScript file:

```
variable.js
```

---

## 6. Run the JavaScript File

Execute the compiled file using Node.js:

```bash
node variable.js
```

---

## Output Example

```
Hello TypeScript
```
