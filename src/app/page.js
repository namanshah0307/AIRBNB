import Image from "next/image";
import Header from "../../component/Header";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <main>
      <div>
        <head>
          <title>Airbnb</title>
          <link rel="icon" href="/favicon.ico" />
        </head>

        {/* Header */}
        <Header />

        {/* Banner */}
      </div>
    </main>
  );
}
