import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef
} from "react";
// @ts-ignore
import "aplayer/dist/APlayer.min.css";
// @ts-ignore
import Aplayer2 from "react-aplayer";
import { songs } from "@/utils/data";
import { Button } from "antd";
import { useLocation } from "dva";
import { useUnmount } from "ahooks";
import ColumnGroup from "antd/es/table/ColumnGroup";

interface Iprops {
  theme?: string | number;
}
const AplayerCpt = ({ theme }: Iprops) => {
  const options = {
    mini: true,
    autoplay: true,
    theme: "#000",
    loop: "all",
    order: "random",
    preload: "auto",
    volume: 0.4,
    mutex: true,
    listFolded: false,
    listMaxHeight: "150px",
    lrcType: 3,
    fixed: true,
    audio: songs
  };

  return (
    <>
      <div id="aplayer">
        <Aplayer2 {...options} />
      </div>
    </>
  );
};

interface AudioType {
  audio: {
    name: string;
    url: string;
    cover?: string;
    lrc?: string;
    artist?: string;
    theme?: string;
  }[];
  ref: any;
}

export const AudioPlayer = forwardRef(({ audio }: AudioType, ref) => {
  const MinusCircleFilled = useRef<any>();
  // const location = useLocation();

  useImperativeHandle(ref, () => ({
    instance: MinusCircleFilled.current
  }));

  const options = useMemo(
    () => ({
      container: document.querySelector("#music"),
      loop: "all",
      volume: 0.3,
      mutex: true,
      audio: audio,
      lrcType: 3,
      theme: "#000",
      autoplay: true
    }),
    [audio]
  );

  useEffect(() => {
    MinusCircleFilled.current?.list.remove(0);
    MinusCircleFilled.current?.list.add(audio);
  }, [audio]);

  function onInit(e: any) {
    MinusCircleFilled.current = e;
  }

  useUnmount(() => {
    MinusCircleFilled.current?.destroy();
  });

  return (
    <>
      <Aplayer2 {...options} onInit={onInit} />
    </>
  );
});

export default AplayerCpt;
