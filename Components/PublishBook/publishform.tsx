"use client";
import { useState } from "react";
import { useAddBookMutation } from "@/app/Redux/features/bookSlice";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; 

const PublishForm = () => {
  const router = useRouter();
  const [selectedFormat, setSelectedFormat] = useState<"Ebook" | "Audio" | "Video">("Ebook");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [confirmRights, setConfirmRights] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // File states
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [ebookFile, setEbookFile] = useState<File | null>(null);

  // Form data state
  const [formData, setFormData] = useState({
    book_id: crypto.randomUUID(),
    title: "",
    author: "",
    summary: "",
    genre: "",
    language: "",
    format: "Ebook" as "Ebook" | "Audio" | "Video",
    audioLink: "",
    videoLink: "",
  });
  const [addBook] = useAddBookMutation();

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const format = e.target.value as "Ebook" | "Audio" | "Video";
    if (!["Ebook", "Audio", "Video"].includes(format)) {
      console.error(`Invalid format value: ${format}`);
      return;
    }
    setSelectedFormat(format);
    setFormData({ ...formData, format });
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    setFormData({ ...formData, language: e.target.value });
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
    setFormData({ ...formData, genre: e.target.value });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      if (name === "coverImage") setCoverImage(files[0]);
      if (name === "ebookFile") setEbookFile(files[0]);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmRights(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!confirmRights) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must confirm that you have the rights to publish this book.",
      });
      return;
    }

    if (
      (selectedFormat === "Ebook" && !ebookFile) ||
      (selectedFormat === "Audio" && !formData?.audioLink) ||
      (selectedFormat === "Video" && !formData.videoLink)
    ) {
      Swal.fire({
        icon: "error",
        title: "Missing File",
        text: `Please provide the required file or link for the selected format (${selectedFormat})`,
      });
      return;
    }

    if (!coverImage) {
      Swal.fire({
        icon: "error",
        title: "Missing Cover Image",
        text: "Please provide a cover image.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      // Create FormData for submission
      const bookFormData = new FormData();

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        bookFormData.append(key, value);
      });

      // Append files
      if (coverImage) {
        bookFormData.append("coverImage", coverImage);
      }

      if (selectedFormat === "Ebook" && ebookFile) {
        bookFormData.append("ebookFile", ebookFile);
      }

      // Add creation date
      bookFormData.append("createdAt", new Date().toISOString());

      // Submit the form
      const response = await addBook(bookFormData).unwrap();
      console.log("Book added successfully:", response);

      Swal.fire({
        icon: "success",
        title: "Book Published",
        text: "Your book has been successfully published!",
      }).then(() => {
        router.push("/"); 
      });
    } catch (error) {
      console.error("Error adding book:", error);
      Swal.fire({
        icon: "error",
        title: "Publish Failed",
        text: "Failed to publish book. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form
      className="bg-white p-6 shadow-md rounded-lg space-y-4 container mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold">Book Information</h2>

      <div>
        <label className="block font-medium">Book Title</label>
        <input
          type="text"
          name="title"
          required
          placeholder="Enter your book's title"
          value={formData.title}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Author</label>
        <input
          type="text"
          name="author"
          required
          placeholder="Enter your book's author"
          value={formData.author}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Summary</label>
        <textarea
          name="summary"
          required
          value={formData.summary}
          onChange={handleInputChange}
          placeholder="Write a summary about your book"
          className="border p-2 w-full rounded h-24"
        ></textarea>
      </div>

      <div>
        <label className="block font-medium">Genre</label>
        <select
          className="border p-2 w-full rounded"
          value={selectedGenre}
          onChange={handleGenreChange}
          required
        >
          <option value="">Select your book category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Children's Book">Children's Book</option>
          <option value="Special Interest">Special Interest</option>
          <option value = "Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Language</label>
        <select
          className="border p-2 w-full rounded"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          required
        >
          <option value="">Select language</option>
          <option value="English">English</option>
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Sinhala">Sinhala</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Book Format</label>
        <select
          className="border p-2 w-full rounded"
          value={selectedFormat}
          onChange={handleFormatChange}
          required
        >
          <option value="Ebook">Ebook</option>
          <option value="Audio">Audio</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {selectedFormat === "Ebook" && (
        <div>
          <label className="block font-medium">Upload Ebook File</label>
          <input
            type="file"
            name="ebookFile"
            accept=".pdf,.epub"
            onChange={handleFileChange}
            required
          />
        </div>
      )}

      {selectedFormat === "Audio" && (
        <div>
          <label className="block font-medium">Audio Link</label>
          <input
            type="url"
            name="audioLink"
            placeholder="Enter audio file link"
            value={formData.audioLink}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
            required
          />
        </div>
      )}

      {selectedFormat === "Video" && (
        <div>
          <label className="block font-medium">Video Link</label>
          <input
            type="url"
            name="videoLink"
            placeholder="Enter video link"
            value={formData.videoLink}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
            required
          />
        </div>
      )}

      <div>
        <label className="block font-medium">Cover Image</label>
        <input
          type="file"
          name="coverImage"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="rights"
          checked={confirmRights}
          onChange={handleCheckboxChange}
          className="h-4 w-4"
          required
        />
        <label htmlFor="rights">
          I confirm I have the rights to publish this book.
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded w-full disabled:bg-blue-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Publishing..." : "Proceed to Payment"}
      </button>
    </form>
  );
};

export default PublishForm;
