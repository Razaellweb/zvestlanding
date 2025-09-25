'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Props = { question: string; answer: string };

export default function FaqItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between">
        <div className="text-left">
          <div className="font-medium">{question}</div>
        </div>
        <ChevronDown className={open ? 'transform rotate-180' : ''} />
      </button>
      {open && <div className="mt-3 text-sm text-muted-foreground">{answer}</div>}
    </div>
  );
}
