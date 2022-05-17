const chart = {
  user_id: 1,
  free_throw: [],
  baseline: {
    base_left: [],
    base_right: [],
  },
  midrange: {
    mid_left: [],
    mid_right: [],
  },
  three: {
    one: [],
    two: [],
    three: [],
    four: [],
    five: [],
  },
};

export default function handler(req, res) {
  res.status(200).json(chart);
}
