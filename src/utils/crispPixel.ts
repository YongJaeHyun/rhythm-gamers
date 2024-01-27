// canvas에서의 line width 보정
function crispPixel(pixel: number, thickness = 1) {
  const halfThickness = thickness / 2;

  return thickness % 2
    ? (Number.isInteger(pixel) ? pixel : Math.round(pixel - halfThickness)) + halfThickness
    : Math.round(pixel);
}

export default crispPixel;
