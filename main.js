let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: purple;">Desarrollo sitios web y me gustan las matemáticas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
