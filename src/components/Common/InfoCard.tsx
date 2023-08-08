"use client";
interface InfoProps {
  title: string;
  description: string;
}
function InfoCard({title, description}: InfoProps) {
  return (
    <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-xl">{description}</p>
      </div>
  );
}
export default InfoCard;