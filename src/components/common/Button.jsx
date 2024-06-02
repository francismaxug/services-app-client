import { Button } from "flowbite-react";

//sizes from docs = xs, sm, md, lg, xl

export default function CustomButton({
  color,
  disabled,
  icon,
  size,
  text,
  type,
  loading,
}) {
  return (
    <>
      <Button
        disabled={disabled || false}
        color={color}
        size={size}
        type={type}
        isProcessing={loading || false}
      >
        {icon}
        <p>{text}</p>
      </Button>
    </>
  );
}
