import Header from "./Header";

function ErrorState() {
  return (
    <div className="error-page">
      <Header />
      <div>
        <main>
          <img src="/assets/images/icon-error.svg" alt="error-icon" />
          <h1>Something went wrong</h1>
          <p>
            We couldn't connect to the server(API error).Please try again in a
            few moments
          </p>
          <button>
            <img
              src="weather-app/public/assets/images/icon-retry.svg"
              alt="retry icon"
            />
            Retry
          </button>
        </main>
      </div>
    </div>
  );
}

export default ErrorState;
