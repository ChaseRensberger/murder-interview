"use client";
import Image from "next/image";
import { useChat } from "ai/react";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/question",
  });
  const photoWidth = 300;
  return (
    <main className="flex min-h-screen flex-col items-center p-12 gap-12 bg-orange-200 px-96">
      <h1 className="font-bold text-2xl underline underline-offset-8">
        Yasper
      </h1>
      <h2>
        He walks into the room, brimming with excitement. Let&apos;s ask him
        some questions.
      </h2>
      <Image
        src={"/Yasper.png"}
        alt="Yasper"
        width={photoWidth}
        height={photoWidth}
        className="ring-8 ring-black"
      />
      <p>
        {messages.map((m, index) => (
          <div key={m.id}>
            <span className="font-bold">
              {index % 2 == 0 ? "Detective Johnson" : "Yasper"}
            </span>
            : {m.content}
          </div>
        ))}
      </p>
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="question"
          className="block text-md font-medium leading-6 text-gray-900"
        >
          Ask your questions:
        </label>
        <textarea
          rows={4}
          name="question"
          id="question"
          className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={input}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="rounded bg-black px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Ask
        </button>
      </form>
    </main>
  );
}
