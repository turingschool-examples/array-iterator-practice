const { expect } = require('chai');

const breweryMethods = require('../lib/breweryMethods')

describe('Answers to instructor cohort problem set', () => {

  it('should take a number argument and create an array of all breweries which serve that many beers or more', () => {
    const breweries = breweryMethods.getBreweriesWithBeerCount(6);

    expect(breweries).to.deep.equal([ 
      'Little Machine Brew',
      'Spangalang Brewery',
      'Beryl\'s Beer Co.',
      'Platt Park Brewing Co.' 
    ])
  })
  
  it('should should take a brewery name as an argument and return a list of beer names that brewery serves', () => {
    const ratioBeers = breweryMethods.getBeers('Ratio Beerworks');

    expect(ratioBeers).to.deep.equal([ 
      'Domestica', 
      'Dear You', 
      'Hold Steady', 
      'Antidote', 
      'Repeater' 
    ]);

    const plattParkBeers = breweryMethods.getBeers('Platt Park Brewing Co.');

    expect(plattParkBeers).to.deep.equal([ 
      'Platt Park Porter',
      'Barrel Aged Nature\'s Sweater',
      'Phaded Pale Ale',
      'Old Man Strength',
      'Tropical Snow Dance IPA',
      'Madagascar Dream',
      'Oktoberfest' 
    ]);
  })

  it('should sum up the total number of beers served at all the breweries', () => {
    const beerCount = breweryMethods.getBeerCount();

    expect(beerCount).to.equal(40)
  })

  it('should create an object where the key is the brewery name and the value is the number of beers', () => {
    const breweryBeerCount = breweryMethods.getBreweryBeerCount();

    expect(breweryBeerCount).to.deep.equal({ 
      'Little Machine Brew': 12,
      'Ratio Beerworks': 5,
      'Spangalang Brewery': 9,
      'Beryl\'s Beer Co.': 7,
      'Platt Park Brewing Co.': 7 
    });
  })

  it('should create an array with all the different beer types, no duplicates', () => {
    const beerTypes = breweryMethods.getBeerTypes();

    expect(beerTypes).to.deep.equal([ 
      'Coffee Double Brown',
      'Barrel-Aged Tripel',
      'American Pale Ale',
      'Rhubarb Grisette',
      'Stout',
      'Lager',
      'English Pale',
      'Porter',
      'Tart Raspberry Ale',
      'Saison',
      'Pale Ale',
      'American Standard Ale',
      'Chocolate Rye Scotch Ale',
      'India Pale Ale',
      'Belgian',
      'Belgian Style Wit',
      'Gose',
      'Sour',
      'Hoppy Pils',
      'Helles',
      'Bavarian Dunkel',
      'Barley Wine',
      'Imperial Red Ale',
      'Cream Ale',
      'Oktoberfest' 
    ])
  })

  it('should return the beer with the highest abv', () => {
    const highAbvBeer = breweryMethods.findHighestAbvBeer();

    console.log(highAbvBeer);

    expect(highAbvBeer).to.deep.equal({ 
      name: 'Barrel Aged Nature\'s Sweater',
      type: 'Barley Wine',
      abv: 10.9,
      ibu: 40 
    })
  })

  it('should return take a beer type as an argument and return a list of breweries that serve it', () => {
    const breweriesServingIPA = breweryMethods.getBreweriesServing('India Pale Ale');

    expect(breweriesServingIPA).to.deep.equal([ 
      'Ratio Beerworks',
      'Spangalang Brewery',
      'Beryl\'s Beer Co.',
      'Platt Park Brewing Co.' 
    ]);
  })

})