import Loader from "../components/Loader";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader color="fill-primary" />
    </div>
  );
}
