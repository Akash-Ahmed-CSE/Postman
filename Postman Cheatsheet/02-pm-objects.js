// Global variables
pm.globals.set("myvar", "test123");
pm.globals.unset("myvar");
pm.globals.clear();

// Environment variables
pm.environment.set("myvar", "test123");
pm.environment.unset("myvar");
pm.environment.clear();

// Variables
pm.variables.set("myvar", "test123");
pm.variables.unset("myvar");
pm.variables.clear();

// Postman response
var jsonData = pm.response.json();
var textData = pm.response.text();
var responseTime = pm.response.responseTime;
var responseCode = pm.response.code;
