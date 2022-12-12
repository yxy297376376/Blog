import { useCallback, useMemo } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

interface Iprops {
  theme?: string | number;
}
const BgAnimation = ({ theme }: Iprops) => {
  const scatterColor = useMemo(() => (theme == "light" ? "#000" : "#fff"), [
    theme
  ]);
  const bgColor = useMemo(() => (theme == "light" ? "#fff" : "#000"), [theme]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    // @ts-ignore
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      // options={{
      //   "fullScreen": {
      //     "enable": true
      //   },
      //   "fpsLimit": 120,
      //   "particles": {
      //     "groups": {
      //       "z5000": {
      //         "number": {
      //           "value": 70
      //         },
      //         "zIndex": {
      //           "value": 50
      //         }
      //       },
      //       "z7500": {
      //         "number": {
      //           "value": 30
      //         },
      //         "zIndex": {
      //           "value": 75
      //         }
      //       },
      //       "z2500": {
      //         "number": {
      //           "value": 50
      //         },
      //         "zIndex": {
      //           "value": 25
      //         }
      //       },
      //       "z1000": {
      //         "number": {
      //           "value": 40
      //         },
      //         "zIndex": {
      //           "value": 10
      //         }
      //       }
      //     },
      //     "number": {
      //       "value": 200,
      //       "density": {
      //         "enable": false,
      //         "value_area": 800
      //       }
      //     },
      //     "color": {
      //       "value": scatterColor,
      //       "animation": {
      //         "enable": true,
      //         "speed": 10,
      //         "sync": false
      //       }
      //     },
      //     "shape": {
      //       "type": "circle"
      //     },
      //     "opacity": {
      //       "value": 1,
      //       "random": false,
      //       "animation": {
      //         "enable": false,
      //         "speed": 1,
      //         "minimumValue": 0.1,
      //         "sync": false
      //       }
      //     },
      //     "size": {
      //       "value": 3
      //     },
      //     "links": {
      //       "enable": false,
      //       "distance": 100,
      //       "color": "#ffffff",
      //       "opacity": 0.4,
      //       "width": 1
      //     },
      //     "move": {
      //       "angle": {
      //         "value": 10,
      //         "offset": 0
      //       },
      //       "enable": true,
      //       "speed": 2,
      //       "direction": "right",
      //       "random": false,
      //       "straight": false,
      //       "outModes": {
      //         "default": "out"
      //       },
      //       "attract": {
      //         "enable": false,
      //         "rotateX": 100,
      //         "rotateY": 1200
      //       }
      //     },
      //     "zIndex": {
      //       "value": 0,
      //       "opacityRate": 0
      //     }
      //   },
      //   "interactivity": {
      //     "events": {
      //       "onHover": {
      //         "enable": true,
      //         "mode": "repulse"
      //       },
      //       "onClick": {
      //         "enable": true,
      //         "mode": "push"
      //       },
      //       "resize": true
      //     },
      //     "modes": {
      //       "grab": {
      //         "distance": 400,
      //         "links": {
      //           "opacity": 1
      //         }
      //       },
      //       "bubble": {
      //         "distance": 400,
      //         "size": 40,
      //         "duration": 2,
      //         "opacity": 0.8
      //       },
      //       "repulse": {
      //         "distance": 70
      //       },
      //       "push": {
      //         "quantity": 4,
      //         "groups": ["z5000", "z7500", "z2500", "z1000"]
      //       },
      //       "remove": {
      //         "quantity": 2
      //       }
      //     }
      //   },
      //   "detectRetina": true,
      //   "background": {
      //     "color": bgColor,
      //     "image": "",
      //     "position": "50% 50%",
      //     "repeat": "no-repeat",
      //     "size": "cover"
      //   },
      //   "emitters": {
      //     "position": {
      //       "y": 55,
      //       "x": -5
      //     },
      //     "rate": {
      //       "delay": 8,
      //       "quantity": 1
      //     },
      //     "size": {
      //       "width": 0,
      //       "height": 0
      //     },
      //     "particles": {
      //       "shape": {
      //         "type": "images",
      //         "options": {
      //           "images": {
      //             "src": "https://particles.js.org/images/cyan_amongus.png",
      //             "width": 500,
      //             "height": 634
      //           }
      //         }
      //       },
      //       "size": {
      //         "value": 20
      //       },
      //       "move": {
      //         "speed": 5,
      //         "outModes": {
      //           "default": "none",
      //           "right": "destroy"
      //         },
      //         "straight": true
      //       },
      //       "zIndex": {
      //         "value": -10
      //       },
      //       "rotate": {
      //         "value": {
      //           "min": 0,
      //           "max": 360
      //         },
      //         "animation": {
      //           "enable": true,
      //           "speed": 10,
      //           "sync": true
      //         }
      //       }
      //     }
      //   }
      // }}
      options={{
        background: {
          color: bgColor,
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        },
        fullScreen: {
          enable: true,
          zIndex: -10
        },
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: scatterColor
          },
          shadow: {
            enable: true,
            color: "#000000",
            blur: 5,
            offset: {
              x: 3,
              y: 3
            }
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.2,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 20,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 250,
            color: scatterColor,
            opacity: 0.4,
            width: 1.5,
            shadow: {
              enable: true,
              blur: 5,
              color: "#000000"
            }
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
              speed: 3
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        fpsLimit: 120,
        retina_detect: true
      }}
      // options={{
      //   background: {
      //     color: {
      //       value: "#00b96b",
      //     },
      //   },
      //   fpsLimit: 220,
      //   interactivity: {
      //     events: {
      //       onClick: {
      //         enable: false,
      //         mode: "push",
      //       },
      //       onHover: {
      //         enable: true,
      //         mode: "repulse",
      //       },
      //       resize: true,
      //     },
      //     modes: {
      //       push: {
      //         quantity: 40,
      //       },
      //       repulse: {
      //         distance: 200,
      //         duration: 0.4,
      //       },
      //     },
      //   },
      //   particles: {
      //     color: {
      //       value: "#00b96b",
      //     },
      //     links: {
      //       color: "#ffffff",
      //       distance: 150,
      //       enable: true,
      //       opacity: 0.5,
      //       width: 1,
      //     },
      //     collisions: {
      //       enable: true,
      //     },
      //     move: {
      //       direction: "none",
      //       enable: true,
      //       outModes: {
      //         default: "bounce",
      //       },
      //       random: true,
      //       speed: 3,
      //       straight: false,
      //     },
      //     number: {
      //       density: {
      //         enable: true,
      //         area: 800,
      //       },
      //       value: 80,
      //     },
      //     opacity: {
      //       value: 0.5,
      //     },
      //     shape: {
      //       type: "circle",
      //     },
      //     size: {
      //       value: { min: 1, max: 5 },
      //     },
      //   },
      //   detectRetina: true,
      // }}
    />
  );
};

export default BgAnimation;
