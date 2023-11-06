import React from "react";
export function LinearProgress(props: {
  /** 0 - 1 range */
  value: number;
}) {
  return (
    <div>
      <div className="mb-5  h-2 w-full  overflow-hidden rounded-lg border-none border-gray-600 text-right text-white bg-sky-500/20 ">
        <div
          className="h-full bg-sky-500"
          style={{
            width: `${props.value * 100}%`,
          }}
        />
      </div>
      {/* <div className="gap-5 flex p-2 ">
<button className=" border border-white rounded-lg p-1">increase</button>
<button className=" border border-white rounded-lg p-1">decrease</button>
</div> */}
    </div>
  );
}
