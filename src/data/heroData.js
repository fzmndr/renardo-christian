import carHero from "../assets/images/car-hero.jpg";
import carDetail from "../assets/images/car-detail.jpg";
import carRolling from "../assets/images/car-rolling.jpg";
import carEvent from "../assets/images/car-event.jpg";

export const heroData = {
  label: "Automotive Visual Storyteller",
  title: "Video Otomotif untuk Momen yang Tak Terlupakan",
  desc: "Saya membantu showroom, brand, komunitas, dan pemilik kendaraan membuat video otomotif yang sinematik, premium, dan punya karakter kuat.",
  showreelVideo: null,

  visuals: [
    {
      label: "Sport Car Film",
      title: "Night Street Run",
      desc: "Cinematic. Fast. Powerful.",
      image: carHero,
      className: "visual-large",
    },
    {
      label: "Detail Shot",
      title: "Interior Luxury",
      desc: "",
      image: carDetail,
      className: "",
    },
    {
      label: "Rolling Shot",
      title: "Highway Motion",
      desc: "",
      image: carRolling,
      className: "",
    },
    {
      label: "Event Documentary",
      title: "Car Meet Aftermovie",
      desc: "Energy, community, and automotive culture.",
      image: carEvent,
      className: "visual-wide",
    },
  ],
};