import dynamic from "next/dynamic";

const VDOPlayer = dynamic(() => import("./Player"), {
  ssr: false,
});

export default VDOPlayer;
