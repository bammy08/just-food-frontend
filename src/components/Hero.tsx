import hero from '../assets/rice.png';

const Hero = () => {
  return (
    <div>
      <img src={hero} className="w-full max-h-[500px] object-cover" />
    </div>
  );
};

export default Hero;
