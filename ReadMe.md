console.log(this); // is an empty object
console.log(global == globalThis); // same thing - globalThis universal common keyword for all JS runtime env
console.log(global); // returns the global obj in nodejs

# Common JS modules - CJS and ES modules MJS or ESM :

- CJS - module.exports and require

  - by default used in nodejs
  - synchronous way
  - non strict mode

- MJS - going forward this is the standard using

- create package.json : {type: "module"}

  - then you can export by writing export in front of var and fun (named export)
  - and import by using import statements eg - import {sum} from "path"
  - using this will disable require and module.exports
  - by default used in raectjs, angular etc
  - can be used in async way
  - strict mode

  # Synchronous and Asynchronous code of node js

  synchronous - var , function or naything that doesn't block the main thread
  asynchronous - settimeout , file, api data fetching
