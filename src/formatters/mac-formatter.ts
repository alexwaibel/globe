import { BaseFormatter } from "./base-formatter";
import { TDateTimeFormatOptions } from "../date-time-format-options";

export class MacFormatter extends BaseFormatter {
  formatDateTime(date: Date, formatOptions: TDateTimeFormatOptions): string {
    throw new Error("Method not implemented.");
  }
}