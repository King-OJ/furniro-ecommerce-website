import Image from "next/image";

export default function ImgContainer({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="grid h-[50px] w-[50px] place-content-center overflow-hidden rounded-md ">
      <Image
        alt="furniro"
        src={imageUrl}
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-auto object-cover"
      />
    </div>
  );
}
