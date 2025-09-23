import { Heading } from "../headings/heading";

function AccessSection({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full ${className}`}
      id={id}
    >
      <Heading>アクセス</Heading>
      <h2 className="text-center font-black py-4">秋田公立美術大学</h2>
      <iframe
        title="秋田公立美術大学へのアクセス"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98252.72287360409!2d140.00848009334052!3d39.68576368169728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8fc39c48cfd6bb%3A0x5fe0cc54f10a8f6a!2sAkita%20University%20of%20Art!5e0!3m2!1sen!2sjp!4v1757680924449!5m2!1sen!2sjp"
        loading="lazy"
        className="w-full aspect-[4/3] border-0 rounded-3xl mt-8 max-w-5xl z-10"
      ></iframe>
    </div>
  );
}

export { AccessSection };