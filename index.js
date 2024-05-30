function debugg() {
  //   let pro = prompt("print pyour name");
  let arra = ["apple", "banana", "apple", "graps", "apple", "banana", "kavi"];
  let apples = [];
  for (let i = 0; i < arra.length; i++) {
    debugger;
    if (arra[i] == "apple") {
      apples.push(arra[i]);
      console.log(`yas its frutes ${arra[i]} `);
    }
  }
}
debugg();
