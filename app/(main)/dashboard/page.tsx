import FilterBar from "@/components/dashboard/FilterBar";
import ProblemCard from "@/components/dashboard/ProblemCard";
import ProblemList from "@/components/dashboard/ProblemList";
import WelcomeSection from "@/components/dashboard/WelcomeSection";

const DashboardPage = () => {
  return (
    <>
      <WelcomeSection />
      <FilterBar />
      <ProblemCard />
      <ProblemList />
    </>
  );
};

export default DashboardPage;
