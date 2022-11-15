import Auth from "./components/pages/Auth/Auth.jsx";
import Home from "./components/pages/Home/Home.jsx";
import NewExercise from "./components/pages/NewExercise/NewExercise.jsx";
import NewWorkout from "./components/pages/NewWorkout/NewWorkout.jsx";
import Profile from "./components/pages/Profile/Profile.jsx";
import SingleWorkout from "./components/pages/Workouts/SingleWorkout.jsx";
import ListWorkouts from "./components/pages/Workouts/ListWorkouts.jsx";
import SingleExercise from "./components/pages/Exercises/SingleExercise.jsx";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    auth: false,
  },
  {
    path: "/auth",
    exact: false,
    component: Auth,
    auth: false,
  },
  {
    path: "/new-workout",
    exact: false,
    component: NewWorkout,
    auth: true,
  },
  {
    path: "/new-exercise",
    exact: false,
    component: NewExercise,
    auth: true,
  },
  {
    path: "/profile",
    exact: false,
    component: Profile,
    auth: true,
  },
  {
    path: "/workout/:id",
    exact: false,
    component: SingleWorkout,
    auth: true,
  },
  {
    path: "/workouts",
    exact: false,
    component: ListWorkouts,
    auth: true,
  },
  {
    path: "/exercise/:id",
    exact: false,
    component: SingleExercise,
    auth: true,
  }
];
