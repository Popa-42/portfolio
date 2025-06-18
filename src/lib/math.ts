function hilbert(n: number, x = 0, y = 0, xi = 1, xj = 0, yi = 0, yj = 1, points: number[][] = []) {
  if (n <= 0) {
    const px = x + (xi + yi) / 2;
    const py = y + (xj + yj) / 2;
    points.push([px, py]);
  } else {
    hilbert(n - 1, x, y, yi / 2, yj / 2, xi / 2, xj / 2, points);
    hilbert(n - 1, x + xi / 2, y + xj / 2, xi / 2, xj / 2, yi / 2, yj / 2, points);
    hilbert(n - 1, x + xi / 2 + yi / 2, y + xj / 2 + yj / 2, xi / 2, xj / 2, yi / 2, yj / 2, points);
    hilbert(n - 1, x + xi / 2 + yi, y + xj / 2 + yj, -yi / 2, -yj / 2, -xi / 2, -xj / 2, points);
  }
  return points;
}

export { hilbert };
