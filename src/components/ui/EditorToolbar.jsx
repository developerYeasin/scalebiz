"use client";

import React from 'react';
import { Bold, Italic, Strikethrough, List, ListOrdered, Heading1, Heading2, Heading3, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { uploadSingleImage } from '@/utils/upload';

const EditorToolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const imageInputRef = React.useRef(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const { imageUrl } = await uploadSingleImage(file);
        if (imageUrl) {
          editor.chain().focus().setImage({ src: imageUrl }).run();
        }
      } catch (error) {
        console.error("Failed to upload image for editor", error);
      }
    }
  };

  return (
    <div className="border-b rounded-t-md p-2 flex flex-wrap items-center gap-1 bg-muted/50">
      <Button variant="ghost" size="icon" onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => editor.chain().focus().toggleStrike().run()} disabled={!editor.can().chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>
        <Strikethrough className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
        <Heading1 className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
        <Heading2 className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
        <Heading3 className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is-active' : ''}>
        <List className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is-active' : ''}>
        <ListOrdered className="h-4 w-4" />
      </Button>
      <input
        type="color"
        onInput={event => editor.chain().focus().setColor(event.target.value).run()}
        value={editor.getAttributes('textStyle').color || '#000000'}
        className="w-8 h-8 p-0 border-none cursor-pointer bg-transparent rounded-md"
        title="Set text color"
      />
      <input
        type="file"
        ref={imageInputRef}
        onChange={handleImageUpload}
        accept="image/png, image/jpeg, image/gif"
        style={{ display: 'none' }}
      />
      <Button variant="ghost" size="icon" onClick={() => imageInputRef.current.click()}>
        <ImageIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default EditorToolbar;