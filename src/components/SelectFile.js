import { useRef } from "react";
import Button from "./Button";

function SelectFile({ value }) {
  const inputFile = useRef(null);
  function clickHandler(){
    inputFile.current.click();
  }
  return (
    <>
      <input
        type="file"
        multiple="multiple"
        ref={inputFile}
        style={{ display: "none" }}
      />
      <Button value={value} onClick={clickHandler}></Button>
    </>
  );
}

export default SelectFile;
