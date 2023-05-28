let main = document.querySelector("main");
let projects_section = document.querySelector("main section");

let about_section = document.createElement("section");
about_section.id = "about";
about_section.className = "section";

let about_h1 = document.createElement("h1");
about_h1.textContent = `ABOUT ME`;
about_h1.className = "section-header";
about_section.appendChild(about_h1);

let about_portrait = document.createElement("img");
about_portrait.id = "portrait";
about_portrait.src = "img/alex.jpg";
about_portrait.width = 300;
about_portrait.height = 300;
about_portrait.alt = "self portrait of alex";
about_section.appendChild(about_portrait);

let p_container = document.createElement("div");
p_container.className = "p_container";

let about_p1 = document.createElement("p");
about_p1.className = "text-white";
about_p1.id = "about_p";
about_p1.textContent = `I'm an undergraduate student at Portland State University 
studying for a B.S. in Computer Science.`;
p_container.appendChild(about_p1);

let about_p2 = document.createElement("p");
about_p2.className = "text-white";
about_p2.id = "about_p";
about_p2.textContent = `Recently, I've been enjoying web development, but I'm also
 interested in iOS development and cybersecurity as well. In addition, I also have experience in
  C, C++, Java, Javascript, Python, and PostgreSQL.`;
p_container.appendChild(about_p2);

let about_p3 = document.createElement("p");
about_p3.className = "text-white";
about_p3.id = "about_p";
about_p3.textContent = `During my free time, I enjoy playing badminton with friends,
 hiking, and learning how to cook amazing food.`;
p_container.appendChild(about_p3);

about_section.appendChild(p_container);
main.insertBefore(about_section, projects_section);
