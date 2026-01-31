import uploadSvg from "../assets/upload.svg";

type Props = React.ComponentProps<"input"> & {
  fileName?: string | null;
  legend: string;
};

export function Upload({ fileName, type, legend, ...rest }: Props) {
  return (
    <div>
      <legend className="text-sm text-gray-200">{legend}</legend>
      <input {...rest} type={type} id="file-upload" className="hidden" />
      <label
        htmlFor="file-upload"
        className="mt-2 w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center cursor-pointer hover:border-green-100 transition-colors ease-linear duration-200"
      >
        <img src={uploadSvg} alt="Upload Icon" className="mb-2" />
        {fileName ? (
          <p className=" text-gray-200 text-xs">{fileName}</p>
        ) : (
          <p className="text-sm text-gray-200">
            Click to upload or drag and drop
          </p>
        )}
      </label>
    </div>
  );
}
