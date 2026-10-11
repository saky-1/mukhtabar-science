export interface FreeFallInputs {
  height: number
  gravity: number
}

export interface FreeFallPoint {
  time: number
  height: number
  velocity: number
}

export interface FreeFallOutputs {
  totalTime: number
  finalVelocity: number
  points: FreeFallPoint[]
}

export function calculateFreeFall({ height, gravity }: FreeFallInputs): FreeFallOutputs {
  if (!Number.isFinite(height) || !Number.isFinite(gravity) || height <= 0 || gravity <= 0) {
    throw new Error('يجب أن يكون الارتفاع والجاذبية قيمًا موجبة وصالحة.')
  }

  const totalTime = Math.sqrt((2 * height) / gravity)
  const finalVelocity = gravity * totalTime
  const steps = 6

  const points = Array.from({ length: steps + 1 }, (_, index) => {
    const time = (totalTime * index) / steps
    const traveled = 0.5 * gravity * time ** 2
    const currentHeight = Math.max(height - traveled, 0)

    return {
      time,
      height: currentHeight,
      velocity: gravity * time,
    }
  })

  return {
    totalTime,
    finalVelocity,
    points,
  }
}
