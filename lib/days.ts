export type Day = {
  name: string;
  icon: string;
};

const days = {
  1: {
    id: 1,
    name: "Push",
    icon: "GiPush",
    exercises: {
      11: {
        id: 11,
        name: "Bench Press",
        icon: "GiPush",
      },
      12: {
        id: 12,
        name: "Incline Bench Fly",
        icon: "GiPush"
      }
    },
  },
  2: {
    id: 2,
    name: "Pull",
    icon: "GiPull",
    exercises: {},
  },
  3: { id: 3, name: "Legs", icon: "GiFemaleLegs", exercises: {} },
  4: {
    id: 4,
    name: "Abs",
    icon: "GiMuscularTorso",
    exercises: {},
  },
};

const getDays = () => {
  return Object.values(days);
};

const getDayById = (id: keyof typeof days) => {
  return Object.values(days[id].exercises);
};

export { getDays, getDayById };
