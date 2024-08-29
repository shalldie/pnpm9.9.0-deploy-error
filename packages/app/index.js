const tpl = require("mini-tpl");

const result = tpl(`hello <%= data.name %>`, { name: "tom" });

console.log(result);
