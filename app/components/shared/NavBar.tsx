/* eslint-disable prettier/prettier */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <Image
        src="/storyforgeImage.webp"
        alt="Image"
        width={60}
        height={60}
        className="flex items-start"
      />

      <div className="space-x-4 items-center text-center justify-center flex pr-5">
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/characters"}>Characters</Link>
        <Link href={"/worldbuilding"}>World Building</Link>
        <Link href={"/timelines"}>Timelines</Link>
        <Link href={"/moodboards"}>MoodBoards</Link>
        <Link href={"/notes"}>Notes</Link>
        <Link href={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
