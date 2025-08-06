
import "../style/hero.css";

function Hero() {
console.log("shivam");

  return (
    <section className="hero">
      <video
      className="hero-vedio"
      src="https://dy8r4okxud2nb.cloudfront.net/Uploads/Admin/Videos/1751096590377-328771655.mp4"
      autoPlay muted loop playsInline />
    </section>
  );
}

export default Hero;
