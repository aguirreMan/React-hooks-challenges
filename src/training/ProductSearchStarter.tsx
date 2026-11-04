const products = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Pear']

export default function ProductSearchStarter() {
  return (
    <section aria-label="Product search" className="space-y-3">
      <label className="grid gap-1">
        Search products
        <input className="rounded border border-slate-600 px-2 py-1" type="search" />
      </label>
      {/* TODO: Wire the search input to a custom hook and derive the visible results. */}
      <ul className="list-inside list-disc">
        {products.map(product => <li key={product}>{product}</li>)}
      </ul>
    </section>
  )
}
