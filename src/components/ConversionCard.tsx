import React from 'react';
import { ArrowRightLeft } from 'lucide-react';

type ConversionCardProps = {
  title: string;
  children: React.ReactNode;
};

export function ConversionCard({ title, children }: ConversionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <div className="flex items-center gap-2 mb-6">
        <ArrowRightLeft className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      {children}
    </div>
  );
}