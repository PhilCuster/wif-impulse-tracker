const data = {
  activities: {
    "port attack": {
      land: {
        germany: 4,
        italy: 1,
        japan: 2,
        usa: 4,
        cw: 2,
        ussr: 3,
        china: 1,
        france: 2,
      },
      air: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      naval: {
        germany: 2,
        italy: 2,
        japan: 2,
        usa: 3,
        cw: 3,
        ussr: 1,
        china: 1,
        france: 2,
      },
      combined: {
        germany: 6,
        italy: 3,
        japan: 4,
        usa: 7,
        cw: 5,
        ussr: 4,
        china: 2,
        france: 3,
      },
    },
    "naval air": {
      land: {
        germany: 4,
        italy: 1,
        japan: 2,
        usa: 4,
        cw: 2,
        ussr: 3,
        china: 1,
        france: 2,
      },
      air: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      naval: {
        germany: 2,
        italy: 2,
        japan: 2,
        usa: 3,
        cw: 3,
        ussr: 1,
        china: 1,
        france: 2,
      },
      combined: {
        germany: 6,
        italy: 3,
        japan: 4,
        usa: 7,
        cw: 5,
        ussr: 4,
        china: 2,
        france: 3,
      },
    },
    "naval movement": {
      land: {
        germany: 0,
        italy: 0,
        japan: 0,
        usa: 0,
        cw: 0,
        ussr: 0,
        china: 0,
        france: 0,
      },
      air: {
        germany: 0,
        italy: 0,
        japan: 0,
        cw: 0,
        france: 0,
        china: 0,
        ussr: 0,
        usa: 0,
      },
      naval: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      combined: {
        germany: 1,
        italy: 1,
        japan: 2,
        usa: 3,
        cw: 2,
        ussr: 1,
        china: 1,
        france: 1,
      },
    },
    "naval combat": {
      land: {
        germany: 0,
        italy: 0,
        japan: 0,
        usa: 0,
        cw: 0,
        ussr: 0,
        china: 0,
        france: 0,
      },
      air: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      naval: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      combined: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
    },
    "strategic bombardment": {
      land: {
        germany: 4,
        italy: 1,
        japan: 2,
        usa: 4,
        cw: 2,
        ussr: 3,
        china: 1,
        france: 2,
      },
      air: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      naval: {
        germany: 2,
        italy: 2,
        japan: 2,
        usa: 3,
        cw: 3,
        ussr: 1,
        china: 1,
        france: 2,
      },
      combined: {
        germany: 6,
        italy: 3,
        japan: 4,
        usa: 7,
        cw: 5,
        ussr: 4,
        china: 2,
        france: 3,
      },
    },
    "ground strike": {
      land: {
        germany: 4,
        italy: 1,
        japan: 2,
        usa: 4,
        cw: 2,
        ussr: 3,
        china: 1,
        france: 2,
      },
      air: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      naval: {
        germany: 2,
        italy: 2,
        japan: 2,
        usa: 3,
        cw: 3,
        ussr: 1,
        china: 1,
        france: 2,
      },
      combined: {
        germany: 6,
        italy: 3,
        japan: 4,
        usa: 7,
        cw: 5,
        ussr: 4,
        china: 2,
        france: 3,
      },
    },
    "rail movement": {
      land: {
        germany: 3,
        italy: 1,
        japan: 2,
        usa: 4,
        cw: 2,
        ussr: 3,
        china: 1,
        france: 2,
      },
      air: {
        germany: 3,
        italy: 1,
        japan: 2,
        usa: 4,
        cw: 2,
        ussr: 3,
        china: 1,
        france: 2,
      },
      naval: {
        germany: 0,
        italy: 0,
        japan: 0,
        usa: 0,
        cw: 0,
        ussr: 0,
        china: 0,
        france: 0,
      },
      combined: {
        germany: 1,
        italy: 1,
        japan: 1,
        usa: 1,
        cw: 1,
        ussr: 1,
        china: 1,
        france: 1,
      },
    },
    "land movement": {
      land: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      air: {
        germany: 0,
        italy: 0,
        japan: 0,
        usa: 0,
        cw: 0,
        ussr: 0,
        china: 0,
        france: 0,
      },
      naval: {
        germany: 0,
        italy: 0,
        japan: 0,
        usa: 0,
        cw: 0,
        ussr: 0,
        china: 0,
        france: 0,
      },
      combined: {
        germany: 6,
        italy: 3,
        japan: 3,
        usa: 4,
        cw: 3,
        ussr: 5,
        china: 2,
        france: 3,
      },
    },
    "air transport": {
      land: {
        germany: 4,
        italy: 1,
        japan: 2,
        usa: 4,
        cw: 2,
        ussr: 3,
        china: 1,
        france: 2,
      },
      air: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      naval: {
        germany: 2,
        italy: 2,
        japan: 2,
        usa: 3,
        cw: 3,
        ussr: 1,
        china: 1,
        france: 2,
      },
      combined: {
        germany: 6,
        italy: 3,
        japan: 4,
        usa: 7,
        cw: 5,
        ussr: 4,
        china: 2,
        france: 3,
      },
    },
    "debark at sea": {
      land: {
        germany: -1,
        italy: -1,
        japan: -1,
        usa: -1,
        cw: -1,
        ussr: -1,
        china: -1,
        france: -1,
      },
      air: {
        germany: 0,
        italy: 0,
        japan: 0,
        cw: 0,
        france: 0,
        china: 0,
        ussr: 0,
        usa: 0,
      },
      naval: {
        germany: -1,
        italy: -1,
        japan: -1,
        usa: -1,
        cw: -1,
        ussr: -1,
        china: -1,
        france: -1,
      },
      combined: {
        germany: 6,
        italy: 3,
        japan: 3,
        usa: 4,
        cw: 3,
        ussr: 5,
        china: 2,
        france: 3,
      },
    },
    invasions: {
      land: {
        germany: -1,
        italy: -1,
        japan: -1,
        usa: -1,
        cw: -1,
        ussr: -1,
        china: -1,
        france: -1,
      },
      air: {
        germany: 0,
        italy: 0,
        japan: 0,
        cw: 0,
        france: 0,
        china: 0,
        ussr: 0,
        usa: 0,
      },
      naval: {
        germany: 0,
        italy: 0,
        japan: 0,
        cw: 0,
        france: 0,
        china: 0,
        ussr: 0,
        usa: 0,
      },
      combined: {
        germany: 3,
        italy: 1,
        japan: 1,
        usa: 2,
        cw: 1,
        ussr: 2,
        china: 1,
        france: 1,
      },
    },
    paradrops: {
      land: {
        germany: 4,
        italy: 1,
        japan: 2,
        usa: 4,
        cw: 2,
        ussr: 3,
        china: 1,
        france: 2,
      },
      air: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      naval: {
        germany: 2,
        italy: 2,
        japan: 2,
        usa: 3,
        cw: 3,
        ussr: 1,
        china: 1,
        france: 2,
      },
      combined: {
        germany: 6,
        italy: 3,
        japan: 4,
        usa: 7,
        cw: 5,
        ussr: 4,
        china: 2,
        france: 3,
      },
    },
    "land combat": {
      land: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      air: {
        germany: 0,
        italy: 0,
        japan: 0,
        cw: 0,
        france: 0,
        china: 0,
        ussr: 0,
        usa: 0,
      },
      naval: {
        germany: 0,
        italy: 0,
        japan: 0,
        cw: 0,
        france: 0,
        china: 0,
        ussr: 0,
        usa: 0,
      },
      combined: {
        germany: 3,
        italy: 1,
        japan: 1,
        usa: 2,
        cw: 1,
        ussr: 2,
        china: 1,
        france: 1,
      },
    },
    "air rebases": {
      land: {
        germany: 4,
        italy: 1,
        japan: 2,
        usa: 4,
        cw: 2,
        ussr: 3,
        china: 1,
        france: 2,
      },
      air: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      naval: {
        germany: 2,
        italy: 2,
        japan: 2,
        usa: 3,
        cw: 3,
        ussr: 1,
        china: 1,
        france: 2,
      },
      combined: {
        germany: 6,
        italy: 3,
        japan: 4,
        usa: 7,
        cw: 5,
        ussr: 4,
        china: 2,
        france: 3,
      },
    },
    reorganisation: {
      land: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      air: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      naval: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
      combined: {
        germany: -1,
        italy: -1,
        japan: -1,
        cw: -1,
        france: -1,
        china: -1,
        ussr: -1,
        usa: -1,
      },
    },
  },
  notes: {
      "naval movement": "You may embark on a cooperating naval unit that chose a naval or combined action, subject to their limitations.",
      "naval combat": "Afterwards your opponent may announce combay anywhere your units entered a sea area and combat was not initiated.",
      "debark at sea": "Units that debark at a port are free.",
      "rail movement": "Only may rail aircraft in air action, only land units in land action."
  }
};

export default data;
