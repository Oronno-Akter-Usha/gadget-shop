import GirdLoader from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <GirdLoader color="000000" loading={true} size={150} />
    </div>
  );
};

export default Loading;
