// OBJECT LITERALS
// 🔗 https://scrimba.com/learn/introtoes6/destructuring-objects-caZ6yQC9
// 🔗 https://scrimba.com/learn/introtoes6/destructuring-objects-challenge-cwdzqBt9

//    a) Look carefully at the `formatUrl` function below. It takes a single argument of `url` which we will assume
// is going to be a string. For more information on what the `toLowerCase()` and `replace()` methods are doing, follow
// the links below:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//    b) Uncomment the `return` statement, and replace the three dots with an object literal that contains the property
// and value of `urlWithDashes`.

function formatUrl(url) {
  const lowerCaseUrl = url.toLowerCase();

  const urlWithDashes = lowerCaseUrl.replace(/\s+/g, "-");

  // return ...;
}

console.log(formatUrl("My Amazing New Blog Post Title"));
