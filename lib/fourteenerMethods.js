const fourteeners = require('./fourteeners');

// As you enter the mountains, make sure to use Object.keys

const fourteenerMethods = {
  getAllPeaks() {
    const allPeaksKeys = Object.keys(fourteeners);

    return allPeaksKeys;
  },

  getFrontRange14erNames() {
    const { peaks } = fourteeners.frontRange;
    const peakKeys = Object.keys(peaks);

    return peakKeys;
  },

  getFrontRangeForests() {},

  getFrontRangeMarmots() {},

  getFRPeaksTallerThan() {},

  getFrontRangeRouteCount() {},

  getAllRangePeaks() {}
}

module.exports = fourteenerMethods;