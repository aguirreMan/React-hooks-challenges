export default function TaskQueueStarter() {
  return (
    <section aria-label="Task queue" className="space-y-3">
      <form className="flex flex-wrap items-end gap-2" onSubmit={event => event.preventDefault()}>
        <label className="grid gap-1">
          Task name
          <input className="rounded border border-slate-600 px-2 py-1" name="task" />
        </label>
        <button className="rounded bg-blue-600 px-3 py-1" type="submit">Add task</button>
      </form>
      {/* TODO: Connect the form and task rows to a typed reducer. */}
      <p>Queue is empty.</p>
    </section>
  )
}
