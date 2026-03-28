import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
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

// const chalengeData = {
// title: "چالش اول",
// startDate: "1404/04/04",
// dayOn: 1,
// days: [
//   {
//     numDay: 1,
//     chalengeItems: [
//        {
//           chalengeId: 12768,
//           chalengeText: "زبان",
//           status: false,
//        }
//     ],
//   },
// ],
// };

const init = () => {
  const storedDaily = JSON.parse(localStorage.getItem("daily-goals"));
  const storedLongTrem = JSON.parse(localStorage.getItem("longTrem-goals"));
  const storedChalenge = JSON.parse(localStorage.getItem("chalenge"));
  return {
    dailyItem: storedDaily || [],
    longTremItem: storedLongTrem || [],
    chalengeItem: storedChalenge || {},
    isOpenMenu: false,
    // this variable for change data after edit, fixed
    changer: false,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    // data section
    //    daily
    case "daily/newItem":
      return { ...state, dailyItem: [...state.dailyItem, action.payload] };

    case "daily/changeStatus": {
      const item = state.dailyItem.find((item) => item.id == action.payload);
      const slate = state.dailyItem.filter((item) => item.id != action.payload);
      return {
        ...state,
        dailyItem: [...slate, { ...item, status: !item.status }],
      };
    }

    case "daily/editItem": {
      const { id, title, description, category } = action.payload;
      const curGoal = state.dailyItem.find((item) => item.id == id);
      curGoal.title = title;
      curGoal.description = description;
      curGoal.category = category;
      return { ...state, changer: !state.changer };
    }

    case "daily/deleteItem":
      return {
        ...state,
        dailyItem: state.dailyItem.filter((item) => item.id !== action.payload),
      };

    // delete all item after end day
    case "daily/deleteAllItem":
      return { ...state };

    //    longTrem
    case "longTrem/newItem":
      return {
        ...state,
        longTremItem: [...state.longTremItem, action.payload],
      };

    case "longTrem/editItem":
      return { ...state };

    case "longTrem/deleteItem":
      return {
        ...state,
        longTremItem: state.longTremItem.filter(
          (item) => item.id != action.payload,
        ),
      };

    //    chalenge
    case "chalenge/adding":
      return { ...state, chalengeItem: action.payload };
    case "chalenge/goNextDay":
      return {
        ...state,
        chalengeItem: {
          ...state.chalengeItem,
          dayOn: state.chalengeItem.dayOn + 1,
        },
      };

    case "chalenge/ending":
      // checke reason (complite or gameOver)
      return { ...state, chalengeItem: {} };

    // ui section
    case "ui/isOpenMenu":
      return { ...state, isOpenMenu: !state.isOpenMenu };
    case "ui/closeMenu":
      return { ...state, isOpenMenu: false };

    default:
      return state;
  }
};

const GoalsProvider = ({ children }) => {
  const [
    { dailyItem, longTremItem, chalengeItem, changer, isOpenMenu },
    dispatch,
  ] = useReducer(reducer, null, init);

  const complatedNum = dailyItem.filter((item) => item.status == true).length;

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

  useEffect(() => {
    localStorage.setItem("chalenge", JSON.stringify(chalengeItem));
  }, [chalengeItem, changer]);

  useEffect(() => {
    localStorage.setItem("daily-goals", JSON.stringify(dailyItem));
  }, [dailyItem, changer]);

  useEffect(() => {
    localStorage.setItem("longTrem-goals", JSON.stringify(longTremItem));
  }, [longTremItem]);

  return (
    <GoalsContext.Provider
      value={{
        isOpenMenu,
        dailyItem,
        complatedNum,
        getDataDailyGoal,
        longTremItem,
        getDataLongGoal,
        chalengeItem,
        dispatch,
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
