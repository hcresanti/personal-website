import { useEffect, useRef } from 'react'
import { Engine, Render, Bodies, World, Mouse, MouseConstraint, Composite, Composites } from 'matter-js'

function Comp (props) {
  const scene = useRef()
  const engine = useRef(Engine.create())

  useEffect(() => {
    const cw = document.body.clientWidth
    const ch = document.body.clientHeight

    var render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent'
      }
    })



    // BARRIER WALLS

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
    ])


    
    // OBJECTS

    var stack = Composites.stack(20, 20, 10, 4, 0, 0, function(x, y) {
      return Bodies.circle(x, y, 46, {
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 0.01,
      });
    });

    Composite.add(engine.current.world, stack);



    // MOUSE

    var canvasMouse = Mouse.create(render.canvas);

    var mouseConstraint = MouseConstraint.create(engine, {
        mouse: canvasMouse
    });

    Composite.add(engine.current.world, mouseConstraint);



    // RETURN 

    Engine.run(engine.current)
    Render.run(render)

    return () => {
      Render.stop(render)
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [])

  return (
    <div>
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default Comp