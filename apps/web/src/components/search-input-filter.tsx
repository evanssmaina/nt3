"use client";

import { Search, X } from "lucide-react";
import {
  Activity,
  type ChangeEvent,
  type JSX,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";

type SearchInputFilterProps = {
  placeholder: string;
  value: string | null;
  onChange: (value: string) => void;
  onClear: () => void;
};

export function SearchInputFilter({
  placeholder,
  value,
  onChange,
  onClear,
}: SearchInputFilterProps): JSX.Element {
  const [search, setSearch] = useState(value ?? "");
  const prevValueRef = useRef(value);

  // Sync internal state with external value prop
  useEffect(() => {
    const newValue = value ?? "";
    if (prevValueRef.current !== value) {
      setSearch(newValue);
      prevValueRef.current = value;
    }
  }, [value]);

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  const handleClear = useCallback(() => {
    setSearch("");
    onClear();
  }, [onClear]);

  return (
    <InputGroup className="max-w-xl">
      <InputGroupAddon aria-hidden="true">
        <Search className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupInput
        onChange={handleSearchChange}
        placeholder={placeholder}
        type="text"
        value={search}
      />
      <Activity mode={search ? "visible" : "hidden"}>
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Clear search"
            onClick={handleClear}
            size="icon-sm"
            type="button"
            variant="ghost"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </InputGroupButton>
        </InputGroupAddon>
      </Activity>
    </InputGroup>
  );
}
