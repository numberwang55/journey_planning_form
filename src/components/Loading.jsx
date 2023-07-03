import loadingImage from "../images/loading.png";

export default function Loading() {
  return (
    <div className="loading-container">
      <img src={loadingImage} alt="Loading" />
    </div>
  );
}
