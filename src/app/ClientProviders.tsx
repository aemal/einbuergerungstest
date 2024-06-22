"use client";

import Navbar from '../components/Navbar';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
