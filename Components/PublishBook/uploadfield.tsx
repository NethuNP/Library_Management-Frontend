interface UploadFieldProps {
    label: string;
    accept: string;
    maxSize: string;
  }
  
  const UploadField = ({ label, accept, maxSize }: UploadFieldProps) => {
    return (
      <div className="border p-4 rounded-lg">
        <label className="block font-medium">{label}</label>
        <input type="file" accept={accept} className="w-full border p-2 mt-2 rounded" />
        <p className="text-sm text-gray-500">(Maximum {maxSize})</p>
      </div>
    );
  };
  
  export default UploadField;