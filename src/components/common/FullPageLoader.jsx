import { Spinner } from "flowbite-react";
export default function FullPageLoader() {
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center">
      <Spinner size="xl" />
    </div>
  );
}
