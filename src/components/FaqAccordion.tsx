"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-carvao/10">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="py-6">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-start justify-between gap-6 text-left"
              aria-expanded={open}
            >
              <div className="flex-1">
                <h3 className="text-base font-medium text-carvao sm:text-lg">
                  {item.question}
                </h3>
                {open && (
                  <p className="mt-3 text-sm leading-relaxed text-carvao/60 sm:text-base">
                    {item.answer}
                  </p>
                )}
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-areia-100 text-carvao">
                {open ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
