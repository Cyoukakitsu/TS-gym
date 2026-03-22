import FilterBar from "@/components/dashboard/FilterBar";
import ProblemList from "@/components/dashboard/ProblemList";
import WelcomeSection from "@/components/dashboard/WelcomeSection";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 m-20">
      <WelcomeSection />
      <FilterBar />
      <ProblemList />
    </div>
  );
};

export default DashboardPage;
