
import { Player as Tuby } from "react-tuby";
import "react-tuby/css/main.css";


const PlayerComponent = ({ url }: { url: string }) => {
    return <Tuby src={[
        {
            quality: "Full HD",
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
        dimensions={{ width: "100%", height: "100%" }} />
};
export default PlayerComponent;
