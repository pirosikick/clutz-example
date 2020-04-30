goog.provide("app.hello");

/**
 * @param {string} name
 */
app.hello.sayHello = (name) => {
  console.log(`Hello, ${name}`);
};

goog.exportSymbol("app.hello.sayHello", app.hello.sayHello);
