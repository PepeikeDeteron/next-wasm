import React, { useState } from 'react';
import { sums } from '../../wasm/pkg/next_wasm_bg.wasm'

const Home: React.VFC = () => {
  const [value, setValue] = useState(0)

  return (
    <>
      <input
        id="wasm"
        type="number"
        onChange={(e) => {
          const v = Number(e.target.value)
          !isNaN(v) && setValue(sums(v))
        }}
      />
      <div>{value}</div>
    </>
  );
};

export default Home;