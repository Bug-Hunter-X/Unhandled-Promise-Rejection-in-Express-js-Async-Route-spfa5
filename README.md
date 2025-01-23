# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Express.js applications:  unhandled promise rejections within asynchronous route handlers.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The `bug.js` example uses an asynchronous operation (`someAsyncOperation`) that *might* throw an error. However, the `catch` block within the `.then().catch()` chain is missing.  If `someAsyncOperation` fails, the error isn't handled, potentially crashing the server silently or producing incomplete responses to the client.

## Solution

The `bugSolution.js` file fixes this by properly handling the potential error within the `.catch` block.  This prevents unexpected crashes and allows for a more robust and reliable application.

## How to run the examples

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `npm install express` to install the necessary dependency.
4. Run `node bug.js` and `node bugSolution.js` to test the buggy and corrected versions respectively.