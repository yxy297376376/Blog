import Texty from "rc-texty";
import "rc-texty/assets/index.css";
import animType from "rc-texty/lib/animTypes";

const TextAnimate = ({ children, ...rest }) => {
  return (
    <Texty type="alpha" mode="smooth" duration={100} {...rest}>
      {children}
    </Texty>
  );
};

export default TextAnimate;
