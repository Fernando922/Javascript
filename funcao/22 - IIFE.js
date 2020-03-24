//iife  Immediately invoked function expression
//você foge do escopo global

(
  function() {
  console.log('sera executado na hora')
  console.log('Foge do escopo mais abrangente')
})()