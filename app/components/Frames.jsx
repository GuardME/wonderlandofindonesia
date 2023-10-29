"use client";
import Snowfall from "react-snowfall";

const Frames = () => {
  if (typeof window !== "undefined") {
    let zSpacing = -1000,
      lastPos = zSpacing / 5,
      $frames = document.getElementsByClassName("frame"),
      frames = Array.from($frames),
      zVals = []

    window.onscroll = function () {
      let top = document.documentElement.scrollTop,
        delta = lastPos - top

      lastPos = top

      frames.forEach(function (n, i) {
        zVals.push(i * zSpacing + zSpacing)
        zVals[i] += delta * -5.5
        let frame = frames[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute(
          "style",
          `transform: ${transform}; opacity: ${opacity}`
        )
      })
    }

    window.scrollTo(0, 1)
  }

  return (
    <>
    <Snowfall
        snowflakeCount={200}
        color="grey"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -9,
        }}
        speed={"140"}
        radius={"12"}
      />
      <div className="frame transform-3d">
        <div>
          <h2>Wonderland Indonesia</h2>
        </div>
      </div>

      <div className="frame transform-3d">
        <div>
          <div className="bg-1-bg frame-media frame-left" />
        </div>
      </div>

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <video
            src="./optimized.mp4"
            autoPlay
            loop
            muted
            className="frame-video frame-video-right"
          />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame transform-3d">
        <div className="frame-text-right">
          <h3>Beautifull Montain in the world</h3>
          <p>
            Most Beautifull montain in the world with the nature from indonesia.
            indonesia have many volcano active in the world. feel the awesome adeventure 
          </p>
        </div>
      </div>

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-2-bg frame-media frame-left" />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-3-bg frame-media frame-right" />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame transform-3d">
        <div className="frame-text-left">
          <h3>Beautifull Beach in the world</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit. Rerum dolorem
            assumenda consequatur dicta error iure laboriosam temporibus omnis
            quae eaque aliquam esse unde accusamus dolores non soluta.
          </p>
        </div>
      </div>

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-4-bg frame-media frame-right" />
        </div>
      </div>

      <div className="frame transform-3d">
        <div>
          <video
            src="./optimized.mp4"
            autoPlay
            loop
            muted
            className="frame-video frame-video-left"
          />
        </div>
      </div>

      <div className="frame transform-3d" />
      <div className="frame transform-3d" />

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-5-bg frame-media frame-right" />
        </div>
      </div>

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <video
            src="./optimized.mp4"
            autoPlay
            loop
            muted
            className="frame-video"
          />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame transform-3d">
        <div>&copy;{new Date().getFullYear()} Ramadanyosi</div>
      </div>
    </>
  )
}

export default Frames
