"use client";

import React, { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { uploadSingleImage } from '@/utils/upload';

const RichTextEditor = ({ content, onChange }) => {
  const quillRef = useRef(null);

  // Custom handler for the image upload button in the toolbar
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        try {
          const { imageUrl } = await uploadSingleImage(file);
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection(true);
          // Insert the uploaded image into the editor
          quill.insertEmbed(range.index, 'image', imageUrl);
        } catch (error) {
          console.error('Image upload failed for Quill editor:', error);
        }
      }
    };
  };

  // Configure the toolbar modules
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'color': [] }],
        ['image'],
        ['clean']
      ],
      handlers: {
        image: imageHandler,
      },
    },
  }), []);

  return (
    <div className="bg-background">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={content}
        onChange={onChange}
        modules={modules}
        placeholder="Write your description here..."
      />
    </div>
  );
};

export default RichTextEditor;