interface CustomHeaderProps {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: CustomHeaderProps) => {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-[2rem] font-bold m-0 text-center">{title}</h1>
      {description && <p className="py-3">{description}</p>}
    </header>
  );
};
