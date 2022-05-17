const user = {
  username: "Derek",
  password: "*****",
  workouts: [
    {
      date: "Todays date",
      workout: "One of the Boop workouts",
      rounds: 1,
      time: "in seconds",
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(user);
}
