import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full h-full overflow-y-scroll bg-slate-600">
      {/* [20rem]: Tailwind에서 제공하는 정해진 규격의 값이 아닌 직접 상세한 값을 적용하고 싶을 때 */}
      <div className="max-w-md mx-auto min-w-[20rem]">{children}</div>
    </div>
  );
};

export default DefaultLayout;
