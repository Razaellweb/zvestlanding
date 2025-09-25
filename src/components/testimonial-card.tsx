import React from 'react';

type Props = {
  name: string;
  role?: string;
  quote: string;
  avatar?: string;
};

export default function TestimonialCard({ name, role, quote, avatar }: Props) {
  return (
    <div className="card">
      <div className="flex items-start gap-4">
        <img src={avatar || 'https://randomuser.me/api/portraits/lego/2.jpg'} alt={`${name} avatar`} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">“{quote}”</p>
    </div>
  );
}
