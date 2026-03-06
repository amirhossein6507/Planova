import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const GoalsContext = createContext();

// const goalsDataDaily = [
//   {
//     id: 1,
//     title: "عنوان 1",
//     description: "",
//     category: "personal",
//     status: false,
//   },
// ];

const goalsDataLong = [
  {
    id: 1,
    title: "عنوان 1",
    description: "توضیحات",
    category: "work",
    timer: 1000,
    createDate: "1404/04/04",
    whyTarget: "چرایی هدف",
    steps: {
      step1: "قدم اول",
      step2: "قدم دوم",
      step3: "قدم سوم",
    },
    checked: false,
  },
];

const GoalsProvider = ({ children }) => {
  const [dailyItem, setDailyItem] = useState(() => {
    return JSON.parse(localStorage.getItem("daily-goals")) || [];
  });
  const [longTremItem, setLongTremItem] = useState(goalsDataLong);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const complatedNum = dailyItem.filter((item) => item.status == true).length;

  const addDailyGoal = (goal) => {
    setDailyItem((goals) => [...goals, goal]);
  };

  const deleteDailyGoal = (id) => {
    setDailyItem((goals) => goals.filter((goal) => goal.id !== id));
  };

  const changeStatusDaily = (id) => {
    setDailyItem((goals) => {
      const item = goals.find((item) => item.id == id);
      const result = goals.filter((item) => item.id != id);
      return [...result, { ...item, status: !item.status }];
      // for (let i = 0; i <= goals.length; i++) {
      //   if (goals[i].id == id) {
      //     return (goals.at(i).status = true);
      //   }
      // }
    });
  };

  const deleteAllDailyItem = () => {
    setDailyItem([]);
  };

  const getDataLongGoal = useCallback(
    (id) => {
      return longTremItem.find((goals) => goals.id == id);
    },
    [longTremItem],
  );

  useEffect(() => {
    localStorage.setItem("daily-goals", JSON.stringify(dailyItem));
  }, [dailyItem]);

  return (
    <GoalsContext.Provider
      value={{
        dailyItem,
        addDailyGoal,
        changeStatusDaily,
        deleteDailyGoal,
        complatedNum,
        deleteAllDailyItem,
        setIsOpenMenu,
        isOpenMenu,
        longTremItem,
        setLongTremItem,
        getDataLongGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

const useGoalsContext = () => {
  const context = useContext(GoalsContext);
  if (context == null)
    throw new Error("used goals context outside goals provider");
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { GoalsProvider, useGoalsContext };
