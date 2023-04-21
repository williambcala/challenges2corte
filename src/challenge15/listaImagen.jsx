import { useSelector } from "react-redux";
import elemntImg from "/elemntImage";

function listaImagen() {
  const images = useSelector((state) => state.images);

  return (
    <div>
      {images.map((image) => (
        <elemntImg key={image.path} image={image} />
      ))}
    </div>
  );
}
