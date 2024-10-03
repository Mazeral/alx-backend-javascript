export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new String(Error('Class extending Building must override evacuationWarningMessage'));
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') throw new TypeError('Sqft must be a number');
    this._sqft = value;
  }
}
