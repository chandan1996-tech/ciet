const fs = require('fs');

function logMessage(msg) {
  console.log(`[LOG] ${msg}`);
  // Schedule a flush using a microtask
  Promise.resolve().then(() => flushLogs());
  // Another microtask (Node-specific): runs even before the promise above
  process.nextTick(() => console.log('Tick: Just after logMessage'));
}

function flushLogs() {
  console.log('Flushing logs to disk (simulated)...');
  // Simulate async disk write
  setTimeout(() => {
    console.log('Logs written to disk ✅');
  }, 1000);
}

// Simulating multiple logs
logMessage('User logged in');
logMessage('User updated profile');

setTimeout(() => {
  console.log('Timeout: This runs after microtasks');
}, 0);

console.log('End of script');
