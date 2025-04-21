import ReactPlayer from "react-player";

const PlayerComponent = ({ url }: { url: string }) => {
    return <ReactPlayer url={url} />;
};
export default PlayerComponent;
