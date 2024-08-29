import Image from "next/image";

export default function Loader({ width = 40, height, ...props }) {
  return (
    <div {...props}>
      <Image
        src="/loader/circles-loader.svg"
        alt="loading"
        width={width}
        height={height || width}
      />
    </div>
  );
}
