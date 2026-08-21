// EXPORT: named.

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <label>
      Поиск
      <input
        type="search"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        placeholder="Название…"
      />
    </label>
  );
}
