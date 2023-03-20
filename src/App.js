import "./App.css";
import Calendar from "./components/Calendar";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
} from "@syncfusion/ej2-react-schedule";

function App() {
  return (
    <div className="App text-white overflow-hidden">
      {/* <Calendar /> */}
      <ScheduleComponent
        currentView="Week"
        selectedDate={new Date()}
        eventSettings={{ dataSource: [] }}
      >
        <Inject services={[Day, Week]} />
      </ScheduleComponent>
    </div>
  );
}

export default App;
