"use client";
import Image from "next/image";
export default function Home() {
  const photoWidth = 300;
  return (
    <main className="flex min-h-screen flex-col items-center p-12 gap-12 bg-orange-200 px-96">
      <h1 className="font-bold text-2xl underline underline-offset-8">
        Yasper
      </h1>
      <h2>
        He walks into the room, brimming with excitement. Let's ask him some
        questions.
      </h2>
      <Image
        src={"/Yasper.png"}
        alt="Yasper"
        width={photoWidth}
        height={photoWidth}
        className="ring-8 ring-black"
      />
      <p>
        <span className="font-bold">Yasper: </span>No, I don't think I know the
        answer to thaNo, I don't think I know the answer to thatNo, I don't
        think I know the answer to thatNo, I don't think I know the answer to
        thatNo, I don't think I know the answer to thatNo, I don't think I know
        the answer to thatt
      </p>
      <div className="flex flex-col items-center gap-4">
        <label
          htmlFor="comment"
          className="block text-md font-medium leading-6 text-gray-900"
        >
          Ask your question:
        </label>
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
        <button
          type="button"
          className="rounded bg-black px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Ask
        </button>
      </div>
    </main>
  );
}
