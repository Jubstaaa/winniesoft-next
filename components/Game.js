import Head from "next/head";
import Script from "next/script";
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
        // height: "100%",
        // width: "auto",
      }}
    />
  );
}

export default Game;
