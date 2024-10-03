export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
    // new.target is the child derived class
    if (typeof this.evacuationWarningMessage !== 'function' && new.target !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
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
