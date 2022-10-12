import { Unity, useUnityContext } from "react-unity-webgl";
import Loader from "./Loader";
import { useState, useEffect } from "react";
function Game({ name }) {
  const [loading, setLoading] = useState(0);
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: `/build/${name}.loader.js`,
    dataUrl: `/build/${name}.data`,
    frameworkUrl: `/build/${name}.framework.js`,
    codeUrl: `/build/${name}.wasm`,
  });
  useEffect(() => {
    if (loading <= 100)
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
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          width: "100%",
        }}
      />
    </>
  );
}

export default Game;
