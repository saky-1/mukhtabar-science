export interface DilutionInputs {
  stockConcentration: number
  targetConcentration: number
  targetVolume: number
}

export interface DilutionOutputs {
  stockVolume: number
  solventVolume: number
}

export function calculateDilution({ stockConcentration, targetConcentration, targetVolume }: DilutionInputs): DilutionOutputs {
  if (
    !Number.isFinite(stockConcentration) ||
    !Number.isFinite(targetConcentration) ||
    !Number.isFinite(targetVolume) ||
    stockConcentration <= 0 ||
    targetConcentration <= 0 ||
    targetVolume <= 0
  ) {
    throw new Error('المدخلات يجب أن تكون قيمًا موجبة وصالحة.')
  }

  if (targetConcentration > stockConcentration) {
    throw new Error('التركيز النهائي يجب أن يكون أصغر أو يساوي تركيز المخزون.')
  }

  const stockVolume = (targetConcentration * targetVolume) / stockConcentration
  const solventVolume = targetVolume - stockVolume

  return {
    stockVolume,
    solventVolume,
  }
}
