 import { dataSort, filterLevel, filterData, filterName} from '../src/data.js';

  const testSort = [
    {
      id: "Bard",
      name: "Bard",
      tags: ["Support", "Mage"],
      info: {
        attack: 4,
        defense: 4,
        magic: 5,
        difficulty: 9
      },
    },
    {
      id: "Ahri",
      name: "Ahri",
      tags: ["Mage", "Assassin"],
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5
      }

    },
    {
      id: "KogMaw",
      name: "Kog'Maw",
      tags: ["Marksman", "Mage"],
      info: {
        attack: 8,
        defense: 2,
        magic: 5,
        difficulty: 6
      }
    },
    {
      id: "Aatrox",
      name: "Aatrox",
      tags: ["Fighter", "Tank"],
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 4
      }
    },
    {
      id: "Kled",
      name: "Kled",
      tags: ["Fighter", "Tank"],
      info: {
              attack: 8,
              defense: 2,
              magic: 2,
              difficulty: 7
            }
    },
    {
      id: "Zyra",
      name: "Zyra",
      tags: ["Mage", "Support"],
      info: {
        attack: 4,
        defense: 3,
        magic: 8,
        difficulty: 7
      }
    },
    {
      id: "Alistar",
      name: "Alistar",
      tags: ["Tank", "Support"],
      info: {
              attack: 6,
              defense: 9,
              magic: 5,
              difficulty: 7
            }

    }
  ];

const testSortAZ = [
  {
    id: "Aatrox",
    name: "Aatrox",
      tags: ["Fighter", "Tank"],
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 4
      }
  },
  {
    id: "Ahri",
    name: "Ahri",
      tags: ["Mage", "Assassin"],
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5
      }
  },
  {
    id: "Alistar",
    name: "Alistar",
      tags: ["Tank", "Support"],
      info: {
              attack: 6,
              defense: 9,
              magic: 5,
              difficulty: 7
            }

    
  },
  {
    id: "Bard",
    name: "Bard",
      tags: ["Support", "Mage"],
      info: {
        attack: 4,
        defense: 4,
        magic: 5,
        difficulty: 9
      },
  },
  {
    id: "Kled",
    name: "Kled",
      tags: ["Fighter", "Tank"],
      info: {
              attack: 8,
              defense: 2,
              magic: 2,
              difficulty: 7
            }
  },
  {
    id: "KogMaw",
    name: "Kog'Maw",
    tags: ["Marksman", "Mage"],
    info: {
      attack: 8,
      defense: 2,
      magic: 5,
      difficulty: 6
    }
  },
  {
    id: "Zyra",
    name: "Zyra",
    tags: ["Mage", "Support"],
    info: {
      attack: 4,
      defense: 3,
      magic: 8,
      difficulty: 7
    }
  }
  
];

const testSortZA = [
  {
    id: "Zyra",
    name: "Zyra",
    tags: ["Mage", "Support"],
    info: {
      attack: 4,
      defense: 3,
      magic: 8,
      difficulty: 7
    }
  },
  {
    id: "KogMaw",
    name: "Kog'Maw",
    tags: ["Marksman", "Mage"],
    info: {
      attack: 8,
      defense: 2,
      magic: 5,
      difficulty: 6
    }
  },
  {
    id: "Kled",
    name: "Kled",
      tags: ["Fighter", "Tank"],
      info: {
              attack: 8,
              defense: 2,
              magic: 2,
              difficulty: 7
            }
  },
  {
    id: "Bard",
    name: "Bard",
      tags: ["Support", "Mage"],
      info: {
        attack: 4,
        defense: 4,
        magic: 5,
        difficulty: 9
      }
  },
  {
    id: "Alistar",
    name: "Alistar",
      tags: ["Tank", "Support"],
      info: {
              attack: 6,
              defense: 9,
              magic: 5,
              difficulty: 7
            }
  },
  {
    id: "Ahri",
    name: "Ahri",
      tags: ["Mage", "Assassin"],
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5
      }
  },
  {
    id: "Aatrox",
    name: "Aatrox",
      tags: ["Fighter", "Tank"],
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 4
      }
  }
];


describe('dataSort', () => {
  it('is a function', () => {
    expect(typeof dataSort).toBe('function');
  });
  it('should sort the champions from Z to A', () => {
      expect(dataSort(testSort, "za")).toEqual(testSortZA);
    });
    it('should sort the champions from A to Z', () => {
      expect(dataSort(testSort, "az")).toEqual(testSortAZ);
    });
  it('Shouls return all data', () => {
      expect(dataSort(testSort)).toEqual(testSort);
    });
 
});
 

const testLevelFilter = [
  {
    id: "Amumu",
    name: "Amumu",
    info: {
            attack: 2,
            defense: 6,
            magic: 8,
            difficulty: 3
          },
  },
  {
    id: "Anivia",
    name: "Anivia",
    info: {
            attack: 1,
            defense: 4,
            magic: 10,
            difficulty: 10
        }
  },
  {
    id: "Annie",
    name: "Annie",
    info: {
            attack: 2,
            defense: 3,
            magic: 10,
            difficulty: 6
          }
  },
  {
    id: "AurelionSol",
    name: "Aurelion Sol",
    info: {
            attack: 2,
            defense: 3,
            magic: 8,
            difficulty: 7
      }
  },
  {
    id: "MissFortune",
    name: "Miss Fortune",
    info: {
            attack: 8,
            defense: 2,
            magic: 5,
            difficulty: 1
      }
  },
  {
    id: "Mordekaiser",
    name: "Mordekaiser",
    info: {
            attack: 4,
            defense: 6,
            magic: 7,
            difficulty: 4
      },
  }
  
]

 const filterEasy = [
  {
    id: "Amumu",
    name: "Amumu",
    info: {
            attack: 2,
            defense: 6,
            magic: 8,
            difficulty: 3
          },
  },
  {
    id: "MissFortune",
    name: "Miss Fortune",
    info: {
            attack: 8,
            defense: 2,
            magic: 5,
            difficulty: 1
      }
  }
 ]

 const filterMedium = [
  {
    id: "Annie",
    name: "Annie",
    info: {
            attack: 2,
            defense: 3,
            magic: 10,
            difficulty: 6
          }
  },
  {
    id: "Mordekaiser",
    name: "Mordekaiser",
    info: {
            attack: 4,
            defense: 6,
            magic: 7,
            difficulty: 4
      },
  }
 ]
 const filterHard = [
  {
    id: "Anivia",
    name: "Anivia",
    info: {
            attack: 1,
            defense: 4,
            magic: 10,
            difficulty: 10
        }
  },
{
    id: "AurelionSol",
    name: "Aurelion Sol",
    info: {
            attack: 2,
            defense: 3,
            magic: 8,
            difficulty: 7
      }
  }
 ]


describe('filterLevel', () => {
  it('is a function', () => {
    expect(typeof filterLevel).toBe('function');
  });

  it('should return champions of the easy level', () => {
    expect(filterLevel(testLevelFilter, 'facil')).toEqual(filterEasy);
  });
  it('should return champions of the medium level', () => {
    expect(filterLevel(testLevelFilter, 'medio')).toEqual(filterMedium);
  });
  it('should return champions of the dificult level', () => {
    expect(filterLevel(testLevelFilter, 'dificil')).toEqual(filterHard);
  });
});


const testTagsFilter = [
  {
    id: "Bard",
    name: "Bard",
    tags: ["Support", "Mage"],
    info: {
      attack: 4,
      defense: 4,
      magic: 5,
      difficulty: 9
    },
  },
  {
    id: "Ahri",
    name: "Ahri",
      tags: ["Mage", "Assassin"],
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5
      }
  },
  {
    id: "Brand",
    name: "Brand",
    tags: ["Mage"],
    info: {
            attack: 2,
            defense: 2,
            magic: 9,
            difficulty: 4
          }
  },
  {
    id: "Aatrox",
    name: "Aatrox",
    tags: ["Fighter", "Tank"],
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    }
  }
]

const mageTag = [
  {
    id: "Bard",
    name: "Bard",
    tags: ["Support", "Mage"],
    info: {
      attack: 4,
      defense: 4,
      magic: 5,
      difficulty: 9
    },
  },
  {
    id: "Ahri",
    name: "Ahri",
      tags: ["Mage", "Assassin"],
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5
      }
  },
  {
    id: "Brand",
    name: "Brand",
    tags: ["Mage"],
    info: {
            attack: 2,
            defense: 2,
            magic: 9,
            difficulty: 4
          }
  }
  
]

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Should return champions that have a mage role', () => {
    expect(filterData(testTagsFilter, 'Mage')).toEqual(mageTag);
  });
  
});

const testNameFilter = [
  {
    id: "Bard",
    name: "Bard",
    tags: ["Support", "Mage"],
    info: {
      attack: 4,
      defense: 4,
      magic: 5,
      difficulty: 9
    },
  },
  {
    id: "Ahri",
    name: "Ahri",
    tags: ["Mage", "Assassin"],
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    }
  },
  {
    id: "KogMaw",
    name: "Kog'Maw",
    tags: ["Marksman", "Mage"],
    info: {
      attack: 8,
      defense: 2,
      magic: 5,
      difficulty: 6
    }
  }
]

const championName = [
  {
    id: "Ahri",
    name: "Ahri",
    tags: ["Mage", "Assassin"],
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    }
  }
]

describe('filterName', () => {
  it('is a function', () => {
    expect(typeof filterName).toBe('function');
  });

  it('Should return the select champions', () => {
    expect(filterName(testNameFilter, 'Ahri')).toEqual(championName);
  });
  
});









