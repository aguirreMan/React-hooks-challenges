import { useId, useState } from 'react'
import Disclosure from './Disclosure'
import RatingPicker from './RatingPicker'

export function DisclosureDemo() {
  return (
    <div className="space-y-3">
      <Disclosure label="What are props?">
        Props are values supplied by a parent component.
      </Disclosure>
      <Disclosure label="What is children?">
        The children prop contains the content nested inside a component’s JSX tags.
      </Disclosure>
    </div>
  )
}

export function RatingPickerDemo() {
  const [rating, setRating] = useState(3)
  const name = useId()

  return (
    <div className="space-y-3">
      <RatingPicker name={name} value={rating} onChange={setRating} />
      <p role="status">Current rating: {rating} out of 5</p>
      <button type="button" onClick={() => setRating(3)} className="text-blue-300 underline">
        Reset rating
      </button>
    </div>
  )
}
