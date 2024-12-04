export enum SizeTypeEnum {
  S = "small",
  M = "medium",
}

export interface SizeMapEntity {
  mobile: Record<SizeTypeEnum, string>;
  tablet: Record<SizeTypeEnum, string>;
  desktop: Record<SizeTypeEnum, string>;
}

export interface SelectOptionEntity {
  value: string;
  label: string;
}

export enum CardSize {
  Large = "large",
  Small = "small",
}


export enum DiaryTabsEnum {
  Progress = "progress",
  Diary = "diary",
  Statistics = "statistics",
}

export interface IconProps {
  color?: string;
  ariaLabel?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  strokeColor?: string;
}

