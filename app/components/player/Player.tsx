
import { Player as Tuby } from "react-tuby";
import "react-tuby/css/main.css";
import ReactHlsPlayer from "react-hls-player";


const PlayerComponent = ({ url }: { url: string }) => {
    return <Tuby src={[
        {
            quality: "1080p",
            url: url,
        },
        {
            quality: "720p",
            url: url,
        },
        {
            quality: "480p",
            url: url,
        }

    ]}

        dimensions={{ width: "100%", height: "100%" }} >
        {(ref, props) => <ReactHlsPlayer playerRef={ref} {...props} />}
    </Tuby>
};
export default PlayerComponent;
