const cards = document.querySelectorAll(".card");

cards.forEach(card =>{
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.boxShadow = "0px 0px 20px rgba(0,0,0,0.25)";
})

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const normx = (x - midX) / midX;
    const normy = (y - midY) / midY;

    const maxTilt = 18;

    const rotateY = normx * maxTilt;
    const rotateX = -normy * maxTilt;

    // Slight scale to emphasize direction
    const scale = 1 + (Math.abs(normx) + Math.abs(normy)) * 0.05;

    card.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

    // Stronger, more directional shadow
    const shadowX = -rotateY * 1.8;
    const shadowY = rotateX * 1.8;

    card.style.boxShadow =
      `${shadowX}px ${shadowY}px 35px rgba(0,0,0,0.35)`;

    // Highlight layer movement (forces depth perception)
    const highlight = card.querySelector(".highlight");
    if (highlight) {
      highlight.style.transform =
        `translate(${normx * -12}px, ${normy * -12}px)`;
      highlight.style.opacity = 0.55 + (Math.abs(normx) + Math.abs(normy)) * 0.15;
    }
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.boxShadow = "0px 0px 20px rgba(0,0,0,0.25)";

    const highlight = card.querySelector(".highlight");
    if (highlight) {
      highlight.style.transform = "translate(0px, 0px)";
      highlight.style.opacity = 1;
    }
  });
});
