/**
 * Type definitions for page metadata and user responses
 */

export interface PageInputField {
  id: string;
  type: 'text' | 'textarea' | 'text_area' | 'long_text' | 'date' | 'number' | 'text_lines' | 'text_response' | 'multiline_text' | 'multi-line text' | 'multi_line_text' | 'text_bubble' | 'text_display';
  label: string;
  placeholder?: string;
  position?: string | {
    top?: number;
    left?: number;
    width?: number;
    height?: number;
  };
  lines?: number;
}

export interface PageMetadata {
  pageNumber: number;
  fileName: string;
  type: 'title' | 'copyright' | 'foreword' | 'toc' | 'content' | 'interactive' | 'blank';
  hasInputFields: boolean;
  inputFields?: PageInputField[];
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
