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

// const goalsDataLong = [
//   {
//     id: 1,
//     title: "عنوان 1",
//     description: "توضیحات",
//     category: "work",
//     timer: 1000,
//     createDate: "1404/04/04",
//     endDate: "1404/04/05",
//     whyTarget: "چرایی هدف",
//     steps: ["قدم اول", "قدم دوم", "قدم سوم"],
//     checked: false,
//   },
// ];

const chalengeData = {
  // title: "چالش اول",
  // startDate: "1404/04/04",
  // dayOn: 1,
  // days: [
  //   {
  //     id: 1,
  //     numDay: 1,
  //     chalengeItem: ["زبان", "ری اکت", "فرندز"],
  //   },
  //   {
  //     id: 2,
  //     numDay: 2,
  //     chalengeItem: ["زبان", "ری اکت", "فرندز"],
  //   },
  // ],
};

const GoalsProvider = ({ children }) => {
  const [dailyItem, setDailyItem] = useState(() => {
    return JSON.parse(localStorage.getItem("daily-goals")) || [];
  });
  const [longTremItem, setLongTremItem] = useState(() => {
    return JSON.parse(localStorage.getItem("longTrem-goals")) || [];
  });
  const [chalengeItem, setChalengeItem] = useState(chalengeData);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const complatedNum = dailyItem.filter((item) => item.status == true).length;

  const addDailyGoal = (goal) => {
    setDailyItem((goals) => [...goals, goal]);
  };

  const editDailyGoal = (goal) => {
    setDailyItem((goals) => {
      goals.filter((item) => item.id !== goal.id);
      return [...goals, goal];
    });
    console.log(typeof goal.id, typeof dailyItem[1].id);
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

  const getDataDailyGoal = useCallback(
    (id) => {
      return dailyItem.find((goals) => goals.id == id);
    },
    [dailyItem],
  );

  const getDataLongGoal = useCallback(
    (id) => {
      return longTremItem.find((goals) => goals.id == id);
    },
    [longTremItem],
  );

  const addLongTremItem = (goal) => {
    setLongTremItem((cur) => [...cur, goal]);
  };

  const deleteLongTremGoal = (id) => {
    setLongTremItem((goals) => goals.filter((goal) => goal.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("daily-goals", JSON.stringify(dailyItem));
  }, [dailyItem]);

  useEffect(() => {
    localStorage.setItem("longTrem-goals", JSON.stringify(longTremItem));
  }, [longTremItem]);

  return (
    <GoalsContext.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu,
        dailyItem,
        addDailyGoal,
        editDailyGoal,
        changeStatusDaily,
        deleteDailyGoal,
        complatedNum,
        deleteAllDailyItem,
        getDataDailyGoal,
        longTremItem,
        setLongTremItem,
        getDataLongGoal,
        addLongTremItem,
        deleteLongTremGoal,
        chalengeItem,
        setChalengeItem,
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
