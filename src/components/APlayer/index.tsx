import React, { useEffect } from 'react';
// @ts-ignore
import 'aplayer/dist/APlayer.min.css';
// @ts-ignore
import Aplayer2 from 'react-aplayer';
import { songs } from '@/utils/data'

interface Iprops {
  theme?: string | number;
}
const AplayerCpt = ({ theme }: Iprops) => {

  const options = {
    mini: true,
    autoplay: true,
    theme: '#000',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.4,
    mutex: true,
    listFolded: false,
    listMaxHeight: '150px',
    lrcType: 3,
    fixed: true,
    audio: songs
  }

  return <>
    <div id='aplayer'>
      <Aplayer2 {...options} />
    </div>
  </>
}

export default AplayerCpt;
