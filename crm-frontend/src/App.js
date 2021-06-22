import "./App.css";
import { Entry } from "./page/entry/Entry.page";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./page/dashboard/Dashboard.page";

function App() {
  return (
    <div>
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
