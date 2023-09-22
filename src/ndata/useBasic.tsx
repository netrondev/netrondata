import { useEffect, useState } from "react";

export function useBasic() {
  const [test, setTest] = useState(0);

  useEffect(() => {
    setTest(test + 1);
  }, [test]);

  return test;
}
