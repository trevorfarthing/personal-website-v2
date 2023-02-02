import ReactPlayer from "react-player/lazy";

// See https://github.com/cookpete/react-player/issues/1455 for explanation of why we need this wrapper and dynamic import

const ReactPlayerWrapper = ({ playerRef, ...props }: any) => {
  return <ReactPlayer ref={playerRef} {...props} />;
};
export default ReactPlayerWrapper;
