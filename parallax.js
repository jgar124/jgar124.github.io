const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;
    
    const normx = (x - midX) / midX;
    const normy = (y - midY) / midY;

    const maxTilt = 10;

    const rotateY = normx * maxTilt;
    const rotateX = -normy * maxTilt;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  })
card.addEventListener("mouseleave", () =>{
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
})
})