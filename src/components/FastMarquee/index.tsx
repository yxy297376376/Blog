import React from 'react';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';

interface Iprops {
  text: string | React.ReactNode;
  [key: string]: any;
  /**
    * Inline style for the container div
    * Type: object
    * Default: {}
    */
  style?: React.CSSProperties;
  /**
   * Class name to style the container div
   * Type: string
   * Default: ""
   */
  className?: string;
  /**
   * Whether to play or pause the marquee
   * Type: boolean
   * Default: true
   */
  play?: boolean;
  /**
   * Whether to pause the marquee when hovered
   * Type: boolean
   * Default: false
   */
  pauseOnHover?: boolean;
  /**
   * Whether to pause the marquee when clicked
   * Type: boolean
   * Default: false
   */
  pauseOnClick?: boolean;
  /**
   * The direction the marquee is sliding
   * Type: "left" or "right"
   * Default: "left"
   */
  direction?: "left" | "right";
  /**
   * Speed calculated as pixels/second
   * Type: number
   * Default: 20
   */
  speed?: number;
  /**
   * Duration to delay the animation after render, in seconds
   * Type: number
   * Default: 0
   */
  delay?: number;
  /**
   * The number of times the marquee should loop, 0 is equivalent to infinite
   * Type: number
   * Default: 0
   */
  loop?: number;
  /**
   * Whether to show the gradient or not
   * Type: boolean
   * Default: true
   */
  gradient?: boolean;
  /**
   * The rgb color of the gradient as an array of length 3
   * Type: Array<number> of length 3
   * Default: [255, 255, 255]
   */
  gradientColor?: [number, number, number];
  /**
   * The width of the gradient on either side
   * Type: string
   * Default: 200
   */
  gradientWidth?: number | string;
  /**
   * A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.
   * Type: Function
   * Default: null
   */
  onFinish?: () => void;
  /**
   * A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).
   * Type: Function
   * Default: null
   */
  onCycleComplete?: () => void;
  /**
   * The children rendered inside the marquee
   * Type: ReactNode
   * Default: null
   */
  children?: React.ReactNode;
}

const FastMarquee = ({
  text, ...rest
}: Iprops) => (
  <Alert
    banner
    message={
      <Marquee pauseOnHover gradient={false} {...rest}>
        {text}
      </Marquee>
    }
  />
);

export default FastMarquee;
