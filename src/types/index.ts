import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface UIDType {
  id: number;
  documentId: string;
}

export interface ImageType extends UIDType {
  url: string;
  name: string;
}

export interface MemeType extends UIDType {
  title: string;
  likes: number;
  image: ImageType | null;
  memeUrl: string;
}
