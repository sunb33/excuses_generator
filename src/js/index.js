window.onload = () => {
  document.querySelector("#excusita").innerHTML = excs();

  console.log(random());
};

function excs() {
  let who = ["my dog", "my dad", "my mom", "my sis"];
  let what = ["crush", "broke", "eat", "lost"];
  let whatd = ["my pizza", "my lapto", "the car", "my doritos"];
  let when = ["yesterday", "at nigth", "today", "when i was sleeping"];

  let whos = Math.floor(Math.random() * who.length);
  let whats = Math.floor(Math.random() * what.length);
  let whatds = Math.floor(Math.random() * whatd.length);

  let whens = Math.floor(Math.random() * when.length);

  return (
    who[whos] + " " + what[whats] + " " + whatd[whatds] + " " + when[whens]
  );
}
