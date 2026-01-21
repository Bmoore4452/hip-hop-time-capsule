/**
 * Type definitions for page metadata and user responses
 */

export interface DecorativeImage {
  name: string;
  position: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
  width?: number;
  height?: number;
}

export interface TextContent {
  title?: string;
  subtitle?: string;
  body?: string;
  questions?: string[];
  footer?: string;
}

export interface PageInputField {
  id: string;
  type:
    | "text"
    | "textarea"
    | "text_area"
    | "long_text"
    | "date"
    | "number"
    | "text_lines"
    | "text_response"
    | "multiline_text"
    | "multi-line text"
    | "multi_line_text"
    | "text_bubble"
    | "text_display"
    | "multiline"
    | "signature";
  label: string;
  placeholder?: string;
  position?:
    | string
    | {
        top?: number | string;
        left?: number | string;
        width?: number | string;
        height?: number | string;
      };
  width?: number | string;
  height?: number | string;
  lines?: number;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
}

export interface PageMetadata {
  pageNumber: number;
  fileName: string;
  type:
    | "title"
    | "copyright"
    | "foreword"
    | "toc"
    | "content"
    | "interactive"
    | "blank"
    | "input-page";
  hasInputFields: boolean;
  inputFields?: PageInputField[];
  accentImages?: AccentImage[];
  textContent?: TextContent;
  description?: string;
  needsCustomLayout?: boolean;
}

export interface UserPageResponse {
  pageNumber: number;
  responses: {
    [fieldId: string]: string;
  };
  lastModified: string;
}
