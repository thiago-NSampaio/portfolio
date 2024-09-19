import { ReactNode } from "react";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

interface RowProps {
  children: ReactNode;
  arr: number[];
}

export function Row({ arr, children }: RowProps) {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  return (
    <div
      className="pt-4 flex overflow-x-auto scrollbar-hide space-x-5"
      {...events}
      ref={ref}
    >
      {arr.map((item) => (
        <div className="inline-flex flex-shrink-0" key={item}>
          {children}
        </div>
      ))}
    </div>
  );
}
