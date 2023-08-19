import Image from "next/image";
export default function Home() {
  const photoWidth = 300;
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-12 bg-orange-200">
      <h1>
        Yasper walks into the room, brimming with excitement. Let's ask him some
        questions.
      </h1>
      <Image
        src={"/Yasper.png"}
        alt="Yasper"
        width={photoWidth}
        height={photoWidth}
      />
      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Add your comment
        </label>
        <div className="mt-2">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
      </div>
    </main>
  );
}
