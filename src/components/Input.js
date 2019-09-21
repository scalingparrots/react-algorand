import React, { useState } from "react";

import { MDBInput } from "mdbreact";

import { DataConsumer } from "./DataProvider";

const Input = props => {
  const [text, setText] = useState(props.value ? props.value : "");

  return (
    <DataConsumer>
      {ctx => (
        <MDBInput
          type="text"
          value={text}
          hint={props.hint}
          onChange={e => setText(e.target.value)}
          disabled={ctx.disabled !== null ? ctx.disabled.text : false}
          size={props.size ? props.size : "lg"}
        />
      )}
    </DataConsumer>
  );
};

export default Input;
