import { Unity, useUnityContext } from "react-unity-webgl";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import { UilExpandArrowsAlt } from "@iconscout/react-unicons";
function Game({ name, display }) {
  const [loading, setLoading] = useState(0);
  const { unityProvider, isLoaded, requestFullscreen } = useUnityContext({
    loaderUrl: `/build/${name}.loader.js`,
    dataUrl: `/build/${name}.data`,
    frameworkUrl: `/build/${name}.framework.js`,
    codeUrl: `/build/${name}.wasm`,
  });

  const handleClick = () => {
    requestFullscreen(true);
  };

  useEffect(() => {
    if (loading < 100)
      setTimeout(() => {
        setLoading(loading + 1);
      }, 100);
  });

  return (
    <>
      {!isLoaded && (
        <div className="d-flex justify-content-center align-items-center">
          <Loader />
          <div className="position-absolute">{loading}%</div>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        style={
          display == "vertical"
            ? {
                maxHeight: "100%",
                maxWidth: "100%",
                width: "100%",
                height: "100%",
              }
            : {
                maxHeight: "100%",
                maxWidth: "100%",
                width: "100%",
              }
        }
      />
      <div className="position-absolute m-2 top-0 end-0 bg-white p-1 rounded opacity-50 unity-button">
        <UilExpandArrowsAlt onClick={handleClick} />
      </div>
    </>
  );
}

export default Game;
