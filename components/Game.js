import { Unity, useUnityContext } from "react-unity-webgl";

function Game({ name }) {
  const { unityProvider } = useUnityContext({
    loaderUrl: `/build/${name}.loader.js`,
    dataUrl: `/build/${name}.data`,
    frameworkUrl: `/build/${name}.framework.js`,
    codeUrl: `/build/${name}.wasm`,
  });
  return (
    <Unity
      unityProvider={unityProvider}
      style={{
        maxHeight: "100%",
        maxWidth: "100%",
        width: "100%",
      }}
    />
  );
}

export default Game;
