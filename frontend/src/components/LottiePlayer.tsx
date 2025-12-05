//LottiePlayer.tsx

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
      className="w-full h-full flex items-center justify-center bg-[#041018]"
      onClick={togglePlay}
    >
      <div className="w-full max-w-[600px] h-full flex items-center justify-center">
        {View}
      </div>
    </div>
  );
};

export default LottiePlayer;
