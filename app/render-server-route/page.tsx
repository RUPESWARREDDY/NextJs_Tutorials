import ImageSlider from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  console.log("server")
  const result = serverSideFunction();
  const clientresult=clientSideFunction();
  return (
    <>
      <h1>Server Route {result} {clientresult}</h1>
      <ImageSlider />
    </>
  );
}
