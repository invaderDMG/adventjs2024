function prepareGifts(gifts: number[]): number[] {
    // Code here
    return Array.from(new Set(gifts)).sort((a, b) => a -b);
  }