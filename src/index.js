class Sorter {
  constructor() {
    this.array = [];
    this.len = 0;
  }

  add(element) {
    this.len =this.len + 1;
    this.array[this.len-1]=element;
  }

  at(index) {
   return this.array[index];
  }

  get length() {
    return this.len;
  }

  toArray() {
    return this.array;
  }

  sort(indices = []) {
    let temp = [], ind = [];

    for (let i = 0; i < indices.length; i++) {
      ind[i] = indices[i];
    }

    for (let i = 0; i < ind.length; i++) {
      for (let j = i + 1; j < ind.length; j++) {
        if (ind[i] > ind[j]) {
          let boof = ind[i];
          ind[i] = ind[j];
          ind[j] = boof;
          i = 0;
        }
      }
    }

    for (let i = 0; i < ind.length; i++) {
      temp[i] = this.array[ind[i]];
    }

    //bubble sort
    for (let i = 0; i < temp.length; i++) {
      for (let j = i + 1; j < temp.length; j++) {
        if (temp[i] > temp[j]) {
          let boof = temp[i];
          temp[i] = temp[j];
          temp[j] = boof;
          i = 0;
        }
      }
    }

    for (let i = 0; i < ind.length; i++)
      this.array[ind[i]] = temp[i];
  }

  setComparator(compareFunction) {
  
  }
}

module.exports = Sorter;