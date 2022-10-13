
var personName = "MiChAEl JoRdOn";

function titleCase(st) {
    st = st.toLowerCase();
    return st.split(" ").reduce( (s, c) => s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), '');
  }

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(titleCase(personName));
