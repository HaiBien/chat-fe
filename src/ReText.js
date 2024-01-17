import React, {useState} from "react";

function ReText() {
  const [valueA, setValueA] = useState("")
  const [valueB, setValueB] = useState("")

  function removeAccents() {
    let str = valueA
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ", "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ"
    ];
    for (var i=0; i<AccentsMap.length; i++) {
      var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    let result = str.replace(/ /g, "-");
    setValueB(result)
  }

  const changeText = (e) => {
    setValueA(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <textarea id="w3review" name="w3review" value={valueA} onChange={(e) => changeText(e)} rows="4" cols="50"/>
        <button onClick={() => removeAccents()}>hihi</button>

        <div style={{backgoundColor: 'white'}}>{valueB}</div>
      </header>
    </div>
  );
}

export default ReText;
