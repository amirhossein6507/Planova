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
//     status: false,
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

const fakeDataUser = {
  username: "amir",
  points: 0,
};

const init = () => {
  const storedDaily = JSON.parse(localStorage.getItem("daily-goals"));
  const storedLongTrem = JSON.parse(localStorage.getItem("longTrem-goals"));
  const storedChalenge = JSON.parse(localStorage.getItem("chalenge"));
  return {
    profile: fakeDataUser || {},
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
    // daily
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

    // longTrem
    case "longTrem/newItem":
      return {
        ...state,
        longTremItem: [...state.longTremItem, action.payload],
      };

    case "longTrem/changeStatus": {
      const item = state.longTremItem.find((item) => item.id == action.payload);
      const slate = state.longTremItem.filter(
        (item) => item.id != action.payload,
      );
      return {
        ...state,
        longTremItem: [...slate, { ...item, status: !item.status }],
      };
    }

    case "longTrem/editItem": {
      const {
        id,
        title,
        description,
        category,
        steps,
        whyTarget,
        createDate,
        endDate,
      } = action.payload;
      const curGoal = state.longTremItem.find((item) => item.id == id);
      console.log(curGoal);
      curGoal.title = title;
      curGoal.description = description;
      curGoal.category = category;
      curGoal.steps = steps;
      curGoal.whyTarget = whyTarget;
      curGoal.createDate = createDate;
      curGoal.endDate = endDate;
      return { ...state, changer: !state.changer };
    }

    case "longTrem/deleteItem":
      return {
        ...state,
        longTremItem: state.longTremItem.filter(
          (item) => item.id != action.payload,
        ),
      };

    // chalenge
    case "chalenge/adding":
      return { ...state, chalengeItem: action.payload };

    //get numDay in days array and found chalnengeId , changened status => payload: numday & chalengId
    case "chalenge/changeStatus": {
      const { id, currentDay } = action.payload;

      const day = state.chalengeItem.days.find(
        (item) => item.numDay == currentDay,
      );

      const chalengeSelected = day.chalengeItems.find(
        (item) => item.chalengeId == id,
      );

      // whene strick mode on ==== bug (don't save changestatus)
      chalengeSelected.chalengeStatus = !chalengeSelected.chalengeStatus;
      return {
        ...state,
        changer: !state.changer,
      };
    }

    case "chalenge/goNextDay":
      return {
        ...state,
        chalengeItem: {
          ...state.chalengeItem,
          dayOn: state.chalengeItem.dayOn + 1,
        },
      };

    case "chalenge/forwardBack":
      return {
        ...state,
        chalengeItem: {
          ...state.chalengeItem,
          dayOn: state.chalengeItem.dayOn - 1,
        },
      };

    case "chalenge/ending": {
      // checke reason (complite or gameOver)
      const points = state.profile.points;
      const complated = action.payload === "complate";
      return {
        ...state,
        chalengeItem: {},
        profile: complated
          ? { ...state.profile, points: points + 10 }
          : { ...state.profile, points: points - 10 },
      };
    }

    // ui section
    case "ui/isOpenMenu":
      return { ...state, isOpenMenu: !state.isOpenMenu };
    case "ui/closeMenu":
      return { ...state, isOpenMenu: false };

    // profile

    default:
      return state;
  }
};

const GoalsProvider = ({ children }) => {
  const [
    { dailyItem, longTremItem, chalengeItem, changer, isOpenMenu, profile },
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
      return longTremItem?.find((goals) => goals.id == id);
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
        longTremItem,
        chalengeItem,
        profile,
        getDataDailyGoal,
        getDataLongGoal,
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
