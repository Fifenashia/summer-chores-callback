# Summer Chores Project

This project simulates a list of summer chores completed in order.

The program includes two versions:

## callbackVersion.js
- Uses nested callback functions.
- Each chore waits for a set amount of time.
- The person may fall asleep based on a random sleep chance.
- If they fall asleep, the chore sequence stops.

## promiseVersion.js
- Uses JavaScript Promises instead of callbacks.
- Each chore returns a Promise.
- resolve() is called when a chore is completed.
- reject() is called if the person falls asleep.
- The chores are chained using .then().
- Errors are handled with .catch().

Both versions use:
- setTimeout to simulate time delays.
- Math.random() to determine if the person stays awake.
