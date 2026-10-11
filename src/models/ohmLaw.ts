export interface OhmInputs {
  voltage: number
  resistance: number
}

export interface OhmOutputs {
  current: number
  power: number
  brightness: number
}

export function calculateOhmLaw({ voltage, resistance }: OhmInputs): OhmOutputs {
  if (!Number.isFinite(voltage) || !Number.isFinite(resistance) || resistance <= 0) {
    throw new Error('قيمة المقاومة يجب أن تكون أكبر من صفر، والجهد قيمة صالحة.')
  }

  const current = voltage / resistance
  const power = voltage * current
  const brightness = Math.min(Math.max(power / 20, 0.1), 1)

  return {
    current,
    power,
    brightness,
  }
}
