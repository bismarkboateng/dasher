"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelectStore } from "@/store/SelectStore";

export default function YearDropDown() {
  const time = useSelectStore((state) => state.time);
  const handleSetTime = useSelectStore((state) => state.handleSetTime);

  const handleSelectChange = (value: string) => {
    handleSetTime(value);
  };

  return (
    <div
      className="flex items-center justify-center
    my-5"
    >
      <Select value={time} onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[180px] bg-[#141A29] text-white border border-[#2c2c2c]">
          <SelectValue placeholder="THIS YEAR" />
        </SelectTrigger>
        <SelectContent className="bg-[#141A29] text-white border border-[#2c2c2c]">
          <SelectGroup>
            <SelectItem value="Last 30 days">Last 30 days</SelectItem>
            <SelectItem value="Last month">Last month</SelectItem>
            <SelectItem value="Last year">Last year</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
