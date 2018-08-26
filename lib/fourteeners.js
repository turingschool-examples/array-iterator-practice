// This object describes the 53 mountains in Colorado 
// that are over 14 thousand feet above sea level. 
// created by Pat McLaughlin
// added by Nathaniel D. Foster
const fourteeners = {
  frontRange: {
    numberOfPeaks : 6,
    highestPeak : 'Gray\'s Peak',
    peaks : {
      graysPeak : {
        elevation : 14270,
        rank : 9,
        forest : 'Arapaho',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'critical',
        numberOfRoutes : 4,
        routes : {
          northSlopes : {
            mileage : 8,
            gain : 3000,
            difficulty : 'class 1',
            exposure : 1
          },
          southRidge : {
            mileage : 7,
            gain : 3250,
            difficulty : 'class 2',
            exposure : 2
          },
          lostRatCouloir : {
            mileage : 6.5,
            gain : 3000,
            difficulty : 'class 3',
            exposure : 3
          },
          southWestRidge : {
            mileage : 10.25,
            gain : 3800,
            difficulty : 'class 2',
            exposure : 1
          }
        }
      },
      torreysPeak : {
        elevation : 14267,
        rank : 11,
        forest : 'Arapaho',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'critical',
        numberOfRoutes : 6,
        routes : {
          southSlopes : {
            mileage : 8,
            gain : 3000,
            difficulty : 'class 2',
            exposure : 1
          },
          kelsoRidge : {
            mileage : 6.75,
            gain : 3100,
            difficulty : 'class 3',
            exposure : 4
          },
          deadDogCouloir : {
            mileage : 6.5,
            gain : 3000,
            difficulty : 'class 3',
            exposure : 3
          },
          tuningFork : {
            mileage : 10.5,
            gain : 4500,
            difficulty : 'class 2+',
            exposure : 2
          },
          emperorCouloir : {
            mileage : 9.5,
            gain : 4500,
            difficulty : 'class 3',
            exposure : 3
          },
          westRidge : {
            mileage : 10,
            gain : 5500,
            difficulty : 'class 2',
            exposure : 2
          }
        }
      },
      longsPeak : {
        elevation : 14255,
        rank : 15,
        forest : 'Rocky Mountain National Park',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'extreme',
        numberOfRoutes : 3,
        routes : {
          keyhole : {
            mileage : 14.5,
            gain : 5100,
            difficulty : 'class 3',
            exposure : 4
          },
          loft : {
            mileage : 13,
            gain : 5300,
            difficulty : 'class 3',
            exposure : 4
          },
          keplingersCouloir : {
            mileage : 16,
            gain : 5900,
            difficulty : 'class 3',
            exposure : 4
          }
        }
      },
      mountEvans : {
        elevation : 14262,
        rank : 14,
        forest : 'Arapaho',
        grizzlyBears : false,
        marmots : true,
        jerryLevel: 'critical',
        numberOfRoutes : 3,
        routes : {
          westRidge : {
            mileage : 17,
            gain : 5600,
            difficulty : 'class 2',
            exposure : 2
          },
          northeastFace : {
            mileage : 3.5,
            gain : 1475,
            difficulty : 'class 2',
            exposure : 1
          },
          northFace : {
            mileage : 2,
            gain : 1500,
            difficulty : 'class 3',
            exposure : 4
          }
        }
      },
      mountBierstadt : {
        elevation : 14060,
        rank : 38,
        forest : 'Arapaho',
        grizzlyBears: false,
        marmots : true,
        jerryLevel : 'critical',
        numberOfRoutes : 2,
        routes : {
          westSlopes : {
            mileage : 7,
            gain : 2850,
            difficulty : 'class 2',
            exposure : 1
          },
          eastRidge : {
            mileage : 5,
            gain : 3000,
            difficulty : 'class 3',
            exposure : 4
          }
        }
      },
      pikesPeak : {
        elevation : 14100,
        rank : 30,
        forest : 'Pike',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'extreme',
        numberOfRoutes : 2,
        routes : {
          eastSlopes : {
            mileage : 26,
            gain : 7500,
            difficulty : 'class 1',
            exposure : 0
          },
          northwestSlopes : {
            mileage : 14,
            gain : 4300,
            difficulty : 'class 2',
            exposure : 1
          }
        }
      }
    }
  },
  tenMileRange : {
    numberOfPeaks : 1,
    highestPeak : 'Quandary Peak',
    peaks : {
      quandaryPeak : {
        elevation : 14265,
        rank : 13,
        forest : 'White River',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'extreme',
        numberOfRoutes : 4,
        routes : {
          eastRidge : {
            mileage : 6.75,
            gain : 3450,
            difficulty : 'class 1',
            exposure : 1
          },
          cristoCouloir : {
            mileage : 2,
            gain : 2575,
            difficulty : 'class 2+',
            exposure : 2
          },
          westRidge : {
            mileage : 4,
            gain : 2650,
            difficulty : 'class 3',
            exposure : 4
          },
          quandaryCouloir : {
            mileage : 5.25,
            gain : 3250,
            difficulty : 'class 3',
            exposure : 3
          }
        }
      }
    }
  },
  mosquitoRange : {
    numberOfPeaks : 5,
    highestPeak : 'Mt Lincoln',
    peaks : {
      mountLincoln : {
        elevation : 14286,
        rank : 8,
        forest : 'Pike',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'extreme',
        numberOfRoutes : 3,
        routes : {
          westRidge : {
            mileage : 6,
            gain : 2600,
            difficulty : 'class 2',
            exposure : 1
          },
          lincolnAmpitheatre : {
            mileage : 4.75,
            gain : 3400,
            difficulty : 'class 2',
            exposure : 2
          },
          eastSlopes : {
            mileage : 6.5,
            gain : 2650,
            difficulty : 'class 2',
            exposure : 1
          }
        }
      },
      mountCameron : {
        elevation : 14238,
        rank : 'unranked',
        forest : 'Pike',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'extreme',
        numberOfRoutes : 1,
        routes : {
          westRidge : {
          mileage : 4.75,
          gain : 2250,
          difficulty : 'class 2',
          exposure : 1
          }
        }
      },
      mountBross : {
        elevation : 14172,
        rank : 22,
        forest : 'Pike',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'extreme',
        numberOfRoutes : 5,
        routes : {
          westSlopes : {
            mileage : 3.25,
            gain : 2250,
            difficulty : 'class 2',
            exposure : 2
            },
          eastSlopesMineralPark : {
            mileage : 9,
            gain : 2900,
            difficulty : 'class 1',
            exposure : 1
          },
          sGully : {
            mileage : 9.50,
            gain : 2600,
            difficulty : 'class 2',
            exposure : 1
          },
          dollyVardenGully : {
            mileage : 4,
            gain : 2900,
            difficulty : 'class 2',
            exposure : 1
          },
          eastSlopesMooseCreek : {
            mileage : 5,
            gain : 3100,
            difficulty : 'class 2',
            exposure : 1
          }
        }
      },
      mountDemocrat : {
        elevation : 14148,
        rank : 28,
        forest : 'Pike',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'extreme',
        numberOfRoutes : 2,
        routes : {
          eastSlope : {
            mileage : 4,
            gain : 2150,
            difficulty : 'class 2',
            exposure : 1
          },
          southSlope : {
            mileage : 2.5,
            gain : 2150,
            difficulty : 'class 2+',
            exposure : 3
          }
        }
      },
      mountSherman : {
        elevation : 14036,
        rank : 45,
        forest : 'Pike',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'extreme',
        numberOfRoutes : 3,
        routes : {
          southwestRidge : {
            mileage : 5.25,
            gain : 2100,
            difficulty : 'class 2',
            exposure : 2
          },
          westSlopesFromIowaGulch : {
            mileage : 4.5,
            gain : 2150,
            difficulty : 'class 2',
            exposure : 2
          },
          southSlope : {
            mileage : 8.5,
            gain: 3100,
            difficulty : 'class 2',
            exposure : 1
          }
        }
      }
    }
  },
  sawatchRange : {
    numberOfPeaks : 15,
    highestPeak : 'Mt Elbert',
    peaks : {
      mountElbert : {
        elevation : 14433,
        rank : 1,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'high',
        numberOfRoutes : 4,
        routes : {
          northeastRidge : {
            mileage : 9.5,
            gain : 4700,
            difficulty : 'class 1',
            exposure : 1
          },
          eastRidge : {
            mileage : 10,
            gain : 4100,
            difficulty : 'class 1',
            exposure : 1
          },
          southeastRidge : {
            mileage : 11,
            gain : 5300,
            difficulty : 'class 2',
            exposure : 1
          },
          boxCreekCouloir : {
            mileage : 8.5,
            gain : 4150,
            difficulty : 'class 2+',
            exposure : 3
          }
        }
      },
      mountMassive : {
        elevation : 14421,
        rank : 2,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'high',
        numberOfRoutes : 3,
        routes : {
          eastSlopes : {
            mileage : 14.5,
            gain : 4500,
            difficulty : 'class 2',
            exposure : 2
          },
          southwestSlopes : {
            mileage : 8,
            gain : 3950,
            difficulty : 'class 2',
            exposure : 2
          },
          eastRidge : {
            mileage : 14,
            gain : 4800,
            difficulty : 'class 2+',
            exposure : 2
          }
        }
      },
      mountHarvard : {
        elevation : 14420,
        rank : 3,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'medium',
        numberOfRoutes : 2,
        routes : {
          southSlopes : {
            mileage : 14,
            gain : 4600,
            difficulty : 'class 2',
            exposure : 2
          },
          southFace : {
            mileage : 14,
            gain : 4600,
            difficulty : 'class 2',
            exposure : 2
          }
        }
      },
      mountColumbia : {
        elevation : 14073,
        rank : 35,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots: true,
        jerryLevel : 'medium',
        numberOfRoutes : 3,
        routes : {
          westSlopes : {
            mileage : 11.5,
            gain : 4250,
            difficulty : 'class 2',
            exposure : 2
          },
          southeastRidge : {
            mileage : 12,
            gain : 4800,
            difficulty : 'class 2',
            exposure : 2
          },
          southwestCouloir : {
            mileage : 13.5,
            gain : 4800,
            difficulty : 'class 2',
            exposure : 2
          }
        }
      },
      laPlataPeak : {
        elevation : 14336,
        rank: 5,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'medium',
        numberOfRoutes : 3,
        routes : {
          northwestRidge : {
            mileage : 9.25,
            gain : 4500,
            difficulty : 'class 2',
            exposure : 2
          },
          southwestRidge : {
            mileage : 7,
            gain : 3380,
            difficulty : 'class 2',
            exposure : 2
          },
          ellingwoodRidge : {
            mileage : 9.5,
            gain : 5900,
            difficulty : 'class 3',
            exposure : 4
          }
        }
      },
      mountOfTheHolyCross : {
        elevation : 14005,
        rank : 51,
        forest : 'White River',
        grizzlyBears: false,
        marmots : true,
        jerryLevel : 'high',
        numberOfRoutes : 3,
        routes : {
          northRidge : {
            mileage : 12,
            gain : 5600,
            difficulty : 'class 2',
            exposure : 2
          },
          crossCouloir : {
            mileage : 12.25,
            gain : 5600,
            difficulty : 'class 3',
            exposure : 3
          },
          haloRidge : {
            mileage : 15,
            gain : 5210,
            difficulty : 'class 2+',
            exposure : 3
          }
        }
      },
      mountHuron : {
        elevation : 14003,
        rank : 52,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'high',
        numberOfRoutes : 3,
        routes : {
          northwestSlopes : {
            mileage : 6.5,
            gain : 3500,
            difficulty : 'class 2',
            exposure : 2
          },
          southwestSlopes : {
            mileage : 9,
            gain : 3600,
            difficulty : 'class 2',
            exposure : 2
          },
          northRidgeFromLuluGulch : {
            mileage : 8.4,
            gain : 3980,
            difficulty : 'class 2',
            exposure : 2
          }
        }
      },
      missouriMountain : {
        elevation : 14067,
        rank : 36,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'medium',
        numberOfRoutes : 3,
        routes : {
          northwestRidge : {
            mileage : 10.5,
            gain : 4500,
            difficulty : 'class 2',
            exposure : 3
          },
          westRidge : {
            mileage : 11.75,
            gain : 4250,
            difficulty : 'class 2',
            exposure : 3
          },
          northFaceCouloirs : {
            mileage : 9,
            gain : 4500,
            difficulty : 'class 2+',
            exposure : 3
          }
        }
      },
      mountBelford : {
        elevation : 14197,
        rank : 18,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'high',
        numberOfRoutes : 1,
        routes : {
          northwestRidge : {
            mileage : 8,
            gain : 4500,
            difficulty : 'class 2',
            exposure : 1
          }
        }
      },
      mountOxford : {
        elevation : 14153,
        rank : 26,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'high',
        numberOfRoutes : 1,
        routes : {
          viaMtBelford : {
            mileage : 11,
            gain : 5800,
            difficulty : 'class 2',
            exposure : 2
          }
        }
      },
      mountPrinceton : {
        elevation : 14197,
        rank : 20,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'medium',
        numberOfRoutes : 1,
        routes : {
          eastSlopes : {
            mileage : 6.5,
            gain : 3200,
            difficulty : 'class 2',
            exposure : 2
          }
        }
      },
      mountYale : {
        elevation : 14196,
        rank : 21,
        forest : 'San Isabel',
        grizzlyBears: false,
        marmots : true,
        jerryLevel : 'medium',
        numberOfRoutes : 2,
        routes : {
          southwestSlopes : {
            mileage : 9.5,
            gain : 4300,
            difficulty : 'class 2',
            exposure : 2
          },
          eastRidge : {
            mileage : 10.5,
            gain : 5000,
            difficulty : 'class 2',
            exposure : 2
          }
        }
      },
      mountAntero : {
        elevation : 14269,
        rank : 10,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'medium',
        numberOfRoutes : 1,
        routes : {
          westSlopes : {
            mileage : 16,
            gain : 5200,
            difficulty : 'class 2',
            exposure : 2
          }
        }
      },
      mountShavano : {
        elevation : 14229,
        rank : 17,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'low',
        numberOfRoutes : 2,
        routes : {
          eastSlopes : {
            mileage : 9,
            gain : 4600,
            difficulty : 'class 2',
            exposure : 2
          },
          angelOfShavano : {
            mileage : 7.5,
            gain : 4600,
            difficulty : 'class 2',
            exposure : 2
          }
        }
      },
      tabeguachePeak : {
        elevation : 14155,
        rank : 25,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'low',
        numberOfRoutes : 2,
        routes : {
          viaMtShavano : {
            mileage : 11,
            gain : 5600,
            difficulty : 'class 2',
            exposure : 2
          },
          westRidge : {
            mileage : 8,
            gain : 4000,
            difficulty : 'class 2',
            exposure : 2
          }
        }
      }
    }
  },
  sangreDeCristoRange : {
    numberOfPeaks : 10,
    highestPeak : 'Blanca Peak',
    peaks : {
      blancaPeak : {
        elevation : 14345,
        rank : 4,
        forest : 'Rio Grande',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'low',
        numberOfRoutes : 1,
        routes : {
          northwestRidge : {
            mileage : 17,
            gain : 6500,
            difficulty : 'class 2+',
            exposure : 3
          }
        }
      },
      ellingwoodPoint : {
        elevation : 14042,
        rank : 42,
        forest : 'Rio Grande',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'low',
        numberOfRoutes : 3,
        routes : {
          southFace : {
            mileage : 17,
            gain : 6200,
            difficulty : 'class 2+',
            exposure : 2
          },
          southwestRidge : {
            mileage : 15,
            gain : 2200,
            difficulty : 'class 3',
            exposure : 4
          },
          northRidgeViaSouthZapataCreek : {
            mileage : 11.6,
            gain : 5500,
            difficulty : 'class 3',
            exposure : 3
          }
        }
      },
      littleBearPeak : {
        elevation : 14037,
        rank : 44,
        forest : 'Rio Grande',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'low',
        numberOfRoutes : 1,
        routes : {
          westRidge : {
            mileage : 14,
            gain : 6200,
            difficulty : 'class 4',
            exposure : 4
          }
        }
      },
      mountLindsey : {
        elevation : 14042,
        rank : 43,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'low',
        numberOfRoutes : 3,
        routes : {
          northwestGully : {
            mileage : 8.25,
            gain : 3500,
            difficulty : 'class 3',
            exposure : 3
          },
          northwestRidge : {
            mileage: 8.25,
            gain: 3500,
            difficulty: 'class 3',
            exposure: 4
          },
          northCouloir: {
            mileage: 8.75,
            gain: 3900,
            difficulty: 'class 2',
            exposure: 2
          }
        }
      },
      crestonePeak: {
        elevation: 14294,
        rank: 7,
        forest: 'San Isabel',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          southFace: {
            mileage: 14,
            gain: 5700,
            difficulty: 'class 3',
            exposure: 4
          }
        }
      },
      crestoneNeedle: {
        elevation: 14197,
        rank: 19,
        forest: 'San Isabel',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 2,
        routes: {
          southFace: {
            mileage: 12,
            gain: 4400,
            difficulty: 'class 3',
            exposure: 4
          },
          ellingwoodArete: {
            mileage: 11.25,
            gain: 4400,
            difficulty: 'class 5',
            exposure: 5
          }
        }
      },
      humboldtPeak: {
        elevation: 14064,
        rank: 37,
        forest: 'San Isabel',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 3,
        routes: {
          westRidge: {
            mileage: 11,
            gain: 4200,
            difficulty: 'class 2',
            exposure: 2
          },
          eastRidge: {
            mileage: 8,
            gain: 4300,
            difficulty: 'class 2',
            exposure: 3
          },
          southeastGully: {
            mileage: 8,
            gain: 5400,
            difficulty: 'class 2',
            exposure: 2
          }
        }
      },
      kitCarsonPeak: {
        elevation: 14165,
        rank: 23,
        forest: 'Rio Grande',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 4,
        routes: {
          viaChallengerPoint: {
            mileage: 14.5,
            gain: 6250,
            difficulty: 'class 3',
            exposure: 3
          },
          eastRidge: {
            mileage: 14.5,
            gain: 5900,
            difficulty: 'class 3',
            exposure: 4
          },
          northRidge: {
            mileage: 11.4,
            gain: 5315,
            difficulty: 'class 4',
            exposure: 4
          },
          outwardBoundCouloir: {
            mileage: 13.75,
            gain: 5500,
            difficulty: 'class 3',
            exposure: 3
          }
        }
      },
      challengerPoint: {
        elevation: 14081,
        rank: 34,
        forest: 'Rio Grande',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 2,
        routes: {
          northSlope: {
            mileage: 12.5,
            gain: 5400,
            difficulty: 'class 2+',
            exposure: 2
          },
          kirkCouloir: {
            mileage: 12.75,
            gain: 5400,
            difficulty: 'class 3',
            exposure: 3
          }
        }
      },
      culebraPeak: {
        elevation: 14047,
        rank: 41,
        forest: 'Cielo Vista Ranch',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          northwestRidge: {
            mileage: 5,
            gain: 2700,
            difficulty: 'class 2',
            exposure: 2
          }
        }
      }
    }
  },
  elkRange : {
    numberOfPeaks: 7,
    highestPeak: 'Castle Peak',
    peaks: {
      castlePeak: {
        elevation: 14265,
        rank: 12,
        forest: 'White River',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 3,
        routes: {
          northeastRidge: {
            mileage: 13.5,
            gain: 4600,
            difficulty: 'class 2+',
            exposure: 3
          },
          northwestRidge: {
            mileage: 13.5,
            gain: 4600,
            difficulty: 'class 2+',
            exposure: 3
          },
          northFaceCouloir: {
            mileage: 13,
            gain: 4600,
            difficulty: 'class 2+',
            exposure: 3
          }
        }
      },
      conundrumPeak: {
        elevation: 14060,
        rank: 'unranked',
        forest: 'White River',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          viaCastlePeak: {
            mileage: 14.5,
            gain: 4850,
            difficulty: 'class 2+',
            exposure: 3
          }
        }
      },
      maroonPeak: {
        elevation: 14156,
        rank: 24,
        forest: 'White River',
        grizzlyBears: false,
        marmots: false,
        jerryLevel: 'low',
        numberOfRoutes: 2,
        routes: {
          southRidge: {
            mileage: 11.5,
            gain: 4800,
            difficulty: 'class 3',
            exposure: 4
          },
          bellCordCouloir: {
            mileage: 8,
            gain: 4556,
            difficulty: 'class 4',
            exposure: 4
          }
        }
      },
      northMaroonPeak: {
        elevation: 14014,
        rank: 'unranked',
        forest: 'White River',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          northeastRidge: {
            mileage: 9.25,
            gain: 4500,
            difficulty: 'class 4',
            exposure: 4
          }
        }
      },
      pyramidPeak: {
        elevation: 14018,
        rank: 47,
        forest: 'White River',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          northeastRidge: {
            mileage: 8.25,
            gain: 4500,
            difficulty: 'class 4',
            exposure: 4
          }
        }
      },
      capitolPeak: {
        elevation: 14130,
        rank: 29,
        forest: 'White River',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          northeastRidge: {
            mileage: 17,
            gain: 5300,
            difficulty: 'class 4',
            exposure: 4
          }
        }
      },
      snowmassMountain: {
        elevation: 14092,
        rank: 31,
        forest: 'White River',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 2,
        routes: {
          eastSlopes: {
            mileage: 22,
            gain: 5800,
            difficulty: 'class 3',
            exposure: 4
          },
          westSlope: {
            mileage: 9,
            gain: 4500,
            difficulty: 'class 3',
            exposure: 4
          }
        }
      }
    }
  },
  sanJuanRange : {
    numberOfPeaks: 14,
    highestPeak: 'Uncompahgre Peak',
    peaks: {
      uncompahgrePeak: {
        elevation: 14309,
        rank: 6,
        forest: 'Uncompahgre',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          southRidge: {
            mileage: 7.5,
            gain: 3000,
            difficulty: 'class 2',
            exposure: 2
          },
        }
      },
      mountWilson: {
        elevation: 14246,
        rank: 16,
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 3,
        routes: {
          northSlopes: {
            mileage: 16,
            gain: 5100,
            difficulty: 'class 4',
            exposure: 4
          },
          southwestSlopes: {
            mileage: 12.5,
            gain: 4400,
            difficulty: 'class 3',
            exposure: 4
          },
          eastFace: {
            mileage: 12,
            gain: 4900,
            difficulty: 'class 3',
            exposure: 4
          }
        }
      },
      wilsonPeak: {
        elevation: 14017,
        rank: 48,
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          southwestRidge: {
            mileage: 10,
            gain: 5000,
            difficulty: 'class 3',
            exposure: 4
          }
        }
      },
      elDientePeak: {
        elevation: 14159,
        rank: 'unranked',
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 3,
        routes: {
          northSlopes: {
            mileage: 15,
            gain: 5000,
            difficulty: 'class 3',
            exposure: 3
          },
          southSlopes: {
            mileage: 12,
            gain: 4300,
            difficulty: 'class 3',
            exposure: 3
          },
          northButtress: {
            mileage: 5,
            gain: 3200,
            difficulty: 'class 4',
            exposure: 5
          }
        }
      },
      mountSneffels: {
        elevation: 14150,
        rank: 27,
        forest: 'Uncompahgre',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'medium',
        numberOfRoutes: 2,
        routes: {
          southSlopes: {
            mileage: 6,
            gain: 2900,
            difficulty: 'class 3',
            exposure: 3
          },
          southwestRidge: {
            mileage: 6.5,
            gain: 2950,
            difficulty: 'class 3',
            exposure: 3
          }
        }
      },
      mountEolus: {
        elevation: 14083,
        rank: 32,
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          northeastRidge: {
            mileage: 17,
            gain: 6100,
            difficulty: 'class 3',
            exposure: 4
          }
        }
      },
      northEolus: {
        elevation: 14039,
        rank: 'unranked',
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          southRidge: {
            mileage: 16.75,
            gain: 6000,
            difficulty: 'class 3',
            exposure: 3
          }
        }
      },
      windomPeak: {
        elevation: 14082,
        rank: 33,
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          westRidge: {
            mileage: 17,
            gain: 6000,
            difficulty: 'class 2+',
            exposure: 3
          }
        }
      },
      sunlightPeak: {
        elevation: 14059,
        rank: 39,
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          southFace: {
            mileage: 17,
            gain: 6000,
            difficulty: 'class 4',
            exposure: 5
          }
        }
      },
      handiesPeak: {
        elevation: 14048,
        rank: 40,
        forest: 'n/a',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'medium',
        numberOfRoutes: 3,
        routes: {
          southwestSlopes: {
            mileage: 5.75,
            gain: 2500,
            difficulty: 'class 1',
            exposure: 1
          },
          eastSlopes: {
            mileage: 8,
            gain: 3650,
            difficulty: 'class 2',
            exposure: 2
          },
          westSlopes: {
            mileage: 5,
            gain: 2800,
            difficulty: 'class 2',
            exposure: 2
          }
        }
      },
      redcloudPeak: {
        elevation: 14034,
        rank:46,
        forest: 'n/a',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: {
          northeastRidge: {
            mileage: 9,
            gain: 3700,
            difficulty: 'class 2',
            exposure: 2,
          }
        }
      },
      sunshinePeak: {
        elevation: 14001,
        rank: 53,
        forest: 'n/a',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 3,
        routes: {
          viaRedcloudPeak: {
            mileage: 12.25,
            gain: 4800,
            difficulty: 'class 2',
            exposure: 2
          },
          northwestFace: {
            mileage: 8.5,
            gain: 3800,
            difficulty: 'class 2+',
            exposure: 2
          },
          eastRidge: {
            mileage: 7,
            gain: 4600,
            difficulty: 'class 2',
            exposure: 2
          }
        }
      },
      wetterhornPeak: {
        elevation: 14015,
        rank: 49,
        forest: 'Uncompahgre',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 2,
        routes: {
          southeastRidge: {
            mileage: 7,
            gain: 3300,
            difficulty: 'class 3',
            exposure: 4
          },
          eastFace: {
            mileage: 6.5,
            gain: 3300,
            difficulty: 'class 3',
            exposure: 4
          }
        }
      },
      sanLuisPeak: {
        elevation: 14014,
        rank: 50,
        forest: 'Gunnison',
        grizzlyBears: true,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 2,
        routes: {
          northeastRidge: {
            mileage: 13.5,
            gain: 3600,
            difficulty: 'class 1',
            exposure: 0
          },
          southRidge: {
            mileage: 11,
            gain: 3700,
            difficulty: 'class 1',
            exposure: 1
          }
        }
      }
    }
  }
}

module.exports = fourteeners;
