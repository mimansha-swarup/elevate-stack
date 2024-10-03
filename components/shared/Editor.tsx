"use client";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

interface EditorProps {
  [key: string]: unknown | string | object;
}
const TinyEditor = ({ value, onChange, rest }: EditorProps) => {
  const theme = {
    skin: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "oxide-dark"
      : "",
    content_css: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "",
  };
  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
      value={value?.toString()}
      onEditorChange={onChange}
      init={{
        ...theme,
        // height: 500,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Inter,Arial,sans-serif; font-size:14px }",
      }}
      {...rest}
    />
  );
};

export default TinyEditor;
