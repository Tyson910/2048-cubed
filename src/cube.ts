export default class Cube {
  x: number;
  y: number;
  z: number;
  value: number;
  previousPosition: { x: number; y: number; z: number } | null;
  mergedFrom: null;

  constructor({ x, y, z }: { x: number; y: number; z: number }, value = 2) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.value = value;
    this.previousPosition = null;
    this.mergedFrom = null;
  }

  savePosition = () => {
    const { x, y, z } = this;
    // TODO: Clean up to use array
    this.previousPosition = { x, y, z };
    return this;
  };

  updatePosition = ({ x, y, z }: { x: number; y: number; z: number }) => {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  };

  get position() {
    return { x: this.x, y: this.y, z: this.z };
  }
}
