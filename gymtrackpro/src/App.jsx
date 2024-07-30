import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTraining from './components/CreateTraining';
import EditTraining from './components/EditTraining';
import EvaluateProgress from './components/EvaluateProgress';
import TrainingGraph from './components/TrainingGraph';
import CreateDiet from './components/CreateDiet';
import EditDiet from './components/EditDiet';
import PatientForm from './components/PatientForm';
import Calendar from './components/Calendar';
import ManageUser from './components/ManageUser';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Routes>
          <Route path="/create-training" element={<CreateTraining />} />
          <Route path="/edit-training/:id" element={<EditTraining />} />
          <Route path="/evaluate-progress/:id" element={<EvaluateProgress />} />
          <Route path="/training-graph" element={<TrainingGraph />} />
          <Route path="/create-diet" element={<CreateDiet />} />
          <Route path="/edit-diet/:id" element={<EditDiet />} />
          <Route path="/create-patient" element={<PatientForm />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/manage-user" element={<ManageUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
