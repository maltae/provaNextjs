import Link from "next/link";
import React, {useState} from "react";

function Index() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>welcome to BLABLABLA!</p>

      <button type="button" onClick={() => setCount((c) => c + 1)}>
        count is: {count}
      </button>
      <Link href="/dashboard">
        <a>blabla</a>
      </Link>
    </>
  );
}

export default Index;
