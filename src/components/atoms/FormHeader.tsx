interface FormHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function FormHeader({
  title,
  description,
  className = 'flex flex-col gap-4 text-center',
}: FormHeaderProps) {
  return (
    <div className={className}>
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
