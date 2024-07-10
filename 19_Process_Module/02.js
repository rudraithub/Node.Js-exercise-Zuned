// Accessing memory usage
const memoryUsage = process.memoryUsage();
console.log('Memory Usage:', memoryUsage);

// Accessing process arguments
const processArgs = process.argv;
console.log('Process Arguments:', processArgs);

// Accessing environment variables
const envVars = process.env;
console.log('Environment Variables:', envVars);

// Accessing current working directory
const cwd = process.cwd();
console.log('Current Working Directory:', cwd);

// Accessing process ID
const processId = process.pid;
console.log('Process ID:', processId);

// Accessing platform
const platform = process.platform;
console.log('Platform:', platform);

// Accessing Node.js version
const nodeVersion = process.version;
console.log('Node.js Version:', nodeVersion);

// Accessing process uptime
const uptime = process.uptime();
console.log('Process Uptime (seconds):', uptime);

// Exiting the process
console.log('Exiting process...');
process.exit();
