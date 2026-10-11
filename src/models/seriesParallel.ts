export type CircuitMode = 'series' | 'parallel'

export interface SeriesParallelInputs {
  voltage: number
  r1: number
  r2: number
  mode: CircuitMode
}

export interface SeriesParallelOutputs {
  equivalentResistance: number
  totalCurrent: number
  branchCurrent1: number
  branchCurrent2: number
}

export function calculateSeriesParallel({ voltage, r1, r2, mode }: SeriesParallelInputs): SeriesParallelOutputs {
  if (!Number.isFinite(voltage) || !Number.isFinite(r1) || !Number.isFinite(r2) || r1 <= 0 || r2 <= 0) {
    throw new Error('يجب أن تكون جميع قيم المقاومات والجهد موجبة وصالحة.')
  }

  const equivalentResistance = mode === 'series' ? r1 + r2 : 1 / (1 / r1 + 1 / r2)
  const totalCurrent = voltage / equivalentResistance

  if (mode === 'series') {
    return {
      equivalentResistance,
      totalCurrent,
      branchCurrent1: totalCurrent,
      branchCurrent2: totalCurrent,
    }
  }

  return {
    equivalentResistance,
    totalCurrent,
    branchCurrent1: voltage / r1,
    branchCurrent2: voltage / r2,
  }
}
