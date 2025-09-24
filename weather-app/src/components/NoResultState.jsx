import Header from "./Header";
import SearchSection from "./SearchSection";

function NoResultState() {
  return (
    <div className="no-result-state">
      <Header />
      <SearchSection />
      <h2>No search result found!</h2>
    </div>
  );
}

export default NoResultState;
