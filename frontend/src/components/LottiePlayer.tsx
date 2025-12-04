import React from "react";
import { useLottie } from "lottie-react";

interface LottiePlayerProps {
  animationData: any;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ animationData }) => {
  const [isPlaying, setIsPlaying] = React.useState(true);

  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View, play, pause } = useLottie(options);

  const togglePlay = () => {
    if (isPlaying) pause();
    else play();
    setIsPlaying(!isPlaying);
    console.log(isPlaying);
  };

  return (
    <div
      className="hidden lg:flex lg:w-[40%] ml-8 items-center justify-center bg-[#041018] "
      onClick={togglePlay}
    >
      {View}
    </div>
  );
};

export default LottiePlayer;
