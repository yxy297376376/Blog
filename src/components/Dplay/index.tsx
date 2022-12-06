import { useEffect, useMemo } from 'react'
import { Player, ControlBar, PlayToggle, BigPlayButton } from 'video-react';


const Dplayer = () => {

  const isMobile = localStorage.getItem('isMobile');

  const fluIdOptions = useMemo(() => {
    if (isMobile == '1') {
      return {
        fluid: true
      }
    } else {
      return {
        fluid: false,
        width: '100%',
        height: 550
      }
    }
  }, [isMobile])


  return <Player
    autoPlay
    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    poster={require('@/assets/images/j3.jpg')}
    {...fluIdOptions}
  >
    <BigPlayButton position="center" />
    <ControlBar autoHide={false} >
      <PlayToggle />
    </ControlBar>
  </Player>
}

export default Dplayer;
