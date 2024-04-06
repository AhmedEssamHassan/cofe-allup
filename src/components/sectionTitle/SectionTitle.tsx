import React from "react";

function SectionTitle({ title }: { title: null | string }) {
  return (
    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-kernel">
      {title}
    </h2>
  );
}

export default SectionTitle;
