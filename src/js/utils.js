function getPointCords (radius, angle, originX, originY) {
  const cords = {};
  cords.x = originX + radius * Math.cos(angle * Math.PI / 180);
  cords.y = originY + radius * Math.sin(angle * Math.PI / 180);
  return cords;
}