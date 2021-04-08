import "./App.css";
import Button from "./components/Button";
import ImageGrid from "./components/ImageGrid";
import SelectFile from "./components/SelectFile";

function App() {
  return (
    <div className="App">
      {/* Model Selection Form */}
      <form className="controlForm">
        <div className="modelSelection">
          <label for="modelList">Choose a Model:</label>
          {/* Model Selection */}
          <select name="modelList" id="modelList">
            <option value="Template Matching">Template Matching</option>
            <option value="Logo Detection">Logo Detection</option>
          </select>
        </div>
        <label for="modelLink">OR</label>
        <input type="text" placeholder="Enter the url of your own model" />
        {/* Control Buttons */}
        <Button value="Run on canned dataset" />
        <SelectFile value="Select own image and run" />
        <Button value="Stop" />
        <Button value="Clear cache (Default:24hrs)" classes="btn-danger" />
      </form>

      <div className="progressBar">
        <progress value="0"></progress>
      </div>
      {/* Filter Buttons */}
      <div className="btn-group">
        <Button value="All" />
        <Button value="Correct Match" />
        <Button value="Wrong Match" />
        <Button value="No Prediction" />
      </div>
      {/* ImageGrid */}
      <ImageGrid />
    </div>
  );
}

export default App;
