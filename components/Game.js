import { Unity, useUnityContext } from "react-unity-webgl";
import Loader from "./Loader";
function Game({ name }) {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: `/build/${name}.loader.js`,
    dataUrl: `/build/${name}.data`,
    frameworkUrl: `/build/${name}.framework.js`,
    codeUrl: `/build/${name}.wasm`,
  });
  return (
    <>
      {!isLoaded && (
        <div className="d-flex justify-content-center align-items-center">
          <Loader />
          <div className="position-absolute">
            {Math.round(loadingProgression * 100)}%
          </div>
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
