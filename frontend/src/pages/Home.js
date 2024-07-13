import "./index.css";
import { useEffect } from "react";
import WorksCard from "../components/WorksCard";
import WorksForm from "../components/WorksForm";
import { useWorksContext } from "../hooks/useWorksHooks";

const Home = () => {
  const { works, dispatch } = useWorksContext();
  useEffect(() => {
    const fetchWorks = async () => {
      const response = await fetch("/api/work");
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKPIN", payload: data });
      }
    };

    fetchWorks();
  }, []);

  return (
    <div className="home">
      <div className="works">
        <WorksForm />

        {works &&
          works.map((works) => <WorksCard key={works._id} works={works} />)}
      </div>
    </div>
  );
};

export default Home;
