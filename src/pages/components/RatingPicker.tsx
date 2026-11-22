interface RatingPickerProps {
  name: string
  value: number
  onChange: (rating: number) => void
}

export default function RatingPicker({ name, value, onChange }: RatingPickerProps) {
  return (
    <fieldset className="rounded-lg border border-slate-700 px-4 pb-4">
      <legend className="px-1 font-medium">Practice difficulty</legend>
      <div className="flex flex-wrap gap-4">
        {[1, 2, 3, 4, 5].map(rating => (
          <label key={rating} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              checked={value === rating}
              onChange={() => onChange(rating)}
            />
            {rating}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
