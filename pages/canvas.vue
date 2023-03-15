<script setup>
const canvas = ref(null)

const mouse = ref({
  current: {
    x: 0,
    y: 0
  },
  previous: {
    x: 0,
    y: 0
  },
  down: false
})

const currentMouse = computed(() => {
  const rect = canvas.value.getBoundingClientRect()
  return {
    x: mouse.value.current.x - rect.left,
    y: mouse.value.current.y - rect.top
  }
})

const draw = (event) => {
  if (mouse.value.down) {
    const ctx = canvas.value.getContext('2d')
    ctx.clearRect(0, 0, 800, 800)
    ctx.lineTo(currentMouse.value.x, currentMouse.value.y)
    ctx.strokeStyle = '#F63E02'
    ctx.lineWidth = 2
    ctx.stroke()
  }
}

const handleMouseDown = (event) => {
  mouse.value.down = true
  mouse.value.current = {
    x: event.pageX,
    y: event.pageY
  }
  const ctx = canvas.value.getContext('2d')

  ctx.moveTo(currentMouse.value.x, currentMouse.value.y)
}

const handleMouseUp = () => {
  mouse.value.down = false
}

const handleMouseMove = (event) => {
  mouse.value.current = {
    x: event.pageX,
    y: event.pageY
  }
  draw(event)
}

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  ctx.translate(0.5, 0.5)
  ctx.imageSmoothingEnabled = false
})

</script>
<template>
  <canvas
    ref="canvas"
    width="800px"
    height="800px"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
  />
</template>
