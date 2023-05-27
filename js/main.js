let src = document.getElementsByTagName("body")[0];
let main = document.createElement("main");

let section = document.createElement("section");
//p.className = "bio";

let about_h1 = document.createElement("h1");
about_h1.textContent = `ABOUT ME`;
about_h1.className = " section-header";
section.appendChild(about_h1);

main.appendChild(section);
src.appendChild(main);
