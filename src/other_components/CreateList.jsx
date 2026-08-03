import { useState } from "react";

const CreateList = () => {
  const [task, setTask] = useState({
    taskStyle: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
  };

  return (
    <div className="flex items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="w-[420px] rounded-2xl border border-zinc-700 bg-zinc-900 p-6 shadow-2xl"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Create Task
        </h1>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Task Style
          </label>
          <input
            type="text"
            name="taskStyle"
            value={task.taskStyle}
            onChange={handleChange}
            placeholder="Design, Development..."
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            rows="3"
            value={task.description}
            onChange={handleChange}
            placeholder="Task description..."
            className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={task.date}
            onChange={handleChange}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Assign To
          </label>
          <input
            type="text"
            name="assignTo"
            value={task.assignTo}
            onChange={handleChange}
            placeholder="Employee name"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={task.category}
            onChange={handleChange}
            placeholder="Design, HR, Sales..."
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateList;
