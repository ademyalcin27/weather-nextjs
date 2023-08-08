interface DetailItemProps {
  title: string;
  info: string|number;
  unit?: string;
}

export function  DetailItem({title, info, unit}: DetailItemProps) {
    return (
      <div className="bg-black/25 flex p-4 items-center justify-center gap-6 rounded-xl">
        <div>
          <h2 className="text-2xl text-white">{title}</h2>
          <h3
            className="text-1xl text-white bg-white/25 rounded-xl mt-1"
            aria-label={`${title}: ${info} ${unit}`}
          >
            {info} {unit}
          </h3>
        </div>
      </div>
    );
}